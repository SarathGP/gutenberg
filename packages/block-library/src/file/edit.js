/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { getBlobByURL, isBlobURL, revokeBlobURL } from '@wordpress/blob';
import {
	__unstableGetAnimateClassName as getAnimateClassName,
	ResizableBox,
	ToolbarButton,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	BlockControls,
	BlockIcon,
	MediaPlaceholder,
	MediaReplaceFlow,
	RichText,
	useBlockProps,
	store as blockEditorStore,
	__experimentalGetElementClassName,
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { useCopyToClipboard } from '@wordpress/compose';
import { __, _x } from '@wordpress/i18n';
import { file as icon } from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticesStore } from '@wordpress/notices';

/**
 * Internal dependencies
 */
import FileBlockInspector from './inspector';
import { browserSupportsPdfs } from './utils';

export const MIN_PREVIEW_HEIGHT = 200;
export const MAX_PREVIEW_HEIGHT = 2000;

function ClipboardToolbarButton( { text, disabled } ) {
	const { createNotice } = useDispatch( noticesStore );
	const ref = useCopyToClipboard( text, () => {
		createNotice( 'info', __( 'Copied URL to clipboard.' ), {
			isDismissible: true,
			type: 'snackbar',
		} );
	} );

	return (
		<ToolbarButton
			className="components-clipboard-toolbar-button"
			ref={ ref }
			disabled={ disabled }
		>
			{ __( 'Copy URL' ) }
		</ToolbarButton>
	);
}

function FileEdit( { attributes, isSelected, setAttributes, clientId, meta } ) {
	const {
		id,
		fileId,
		fileName,
		href,
		textLinkHref,
		textLinkTarget,
		showDownloadButton,
		downloadButtonText,
		displayPreview,
		previewHeight,
	} = attributes;

	const { blobURL } = meta;

	const { media, mediaUpload } = useSelect(
		( select ) => ( {
			media:
				id === undefined
					? undefined
					: select( coreStore ).getMedia( id ),
			mediaUpload: select( blockEditorStore ).getSettings().mediaUpload,
		} ),
		[ id ]
	);

	const { createErrorNotice } = useDispatch( noticesStore );
	const { toggleSelection, __unstableMarkNextChangeAsNotPersistent } =
		useDispatch( blockEditorStore );

	const [ isUploadingBlob, setIsUploadingBlob ] = useState( false );

	useEffect( () => {
		// Upload a file drag-and-dropped into the editor.
		const file = getBlobByURL( blobURL );
		if ( file ) {
			setIsUploadingBlob( true );

			mediaUpload( {
				filesList: [ file ],
				onFileChange: ( [ newMedia ] ) => {
					onSelectFile( newMedia, { isPersistent: false } );
					setIsUploadingBlob( false );
				},
				onError: ( message ) => {
					onUploadError( message, { isPersistent: false } );
					setIsUploadingBlob( false );
				},
			} );

			revokeBlobURL( blobURL );
		}
	}, [] );

	useEffect( () => {
		if ( ! fileId && href ) {
			// Add a unique fileId to each file block.
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes( { fileId: `wp-block-file--media-${ clientId }` } );
		}
	}, [ href, fileId, clientId ] );

	function onSelectFile( newMedia, { isPersistent = true } = {} ) {
		if ( newMedia && newMedia.url && ! isBlobURL( newMedia.url ) ) {
			const isPdf = newMedia.url.endsWith( '.pdf' );
			if ( ! isPersistent ) {
				__unstableMarkNextChangeAsNotPersistent();
			}
			setAttributes( {
				href: newMedia.url,
				fileName: newMedia.title,
				textLinkHref: newMedia.url,
				id: newMedia.id,
				displayPreview: isPdf ? true : undefined,
				previewHeight: isPdf ? 600 : undefined,
			} );
		}
	}

	function onUploadError( message ) {
		setAttributes( { href: undefined } );
		createErrorNotice( message, { type: 'snackbar' } );
	}

	function changeLinkDestinationOption( newHref ) {
		// Choose Media File or Attachment Page (when file is in Media Library).
		setAttributes( { textLinkHref: newHref } );
	}

	function changeOpenInNewWindow( newValue ) {
		setAttributes( {
			textLinkTarget: newValue ? '_blank' : false,
		} );
	}

	function changeShowDownloadButton( newValue ) {
		setAttributes( { showDownloadButton: newValue } );
	}

	function changeDownloadButtonText( newValue ) {
		// Remove anchor tags from button text content.
		setAttributes( {
			downloadButtonText: newValue.replace( /<\/?a[^>]*>/g, '' ),
		} );
	}

	function changeDisplayPreview( newValue ) {
		setAttributes( { displayPreview: newValue } );
	}

	function handleOnResizeStop( event, direction, elt, delta ) {
		toggleSelection( true );

		const newHeight = parseInt( previewHeight + delta.height, 10 );
		setAttributes( { previewHeight: newHeight } );
	}

	function changePreviewHeight( newValue ) {
		const newHeight = Math.max(
			parseInt( newValue, 10 ),
			MIN_PREVIEW_HEIGHT
		);
		setAttributes( { previewHeight: newHeight } );
	}

	const attachmentPage = media && media.link;

	const blockProps = useBlockProps( {
		className: classnames(
			isUploadingBlob && getAnimateClassName( { type: 'loading' } ),
			{
				'is-transient': isUploadingBlob,
			}
		),
	} );

	const displayPreviewInEditor = browserSupportsPdfs() && displayPreview;

	if ( ! href ) {
		return (
			<div { ...blockProps }>
				<MediaPlaceholder
					icon={ <BlockIcon icon={ icon } /> }
					labels={ {
						title: __( 'File' ),
						instructions: __(
							'Upload a file or pick one from your media library.'
						),
					} }
					onSelect={ onSelectFile }
					onError={ onUploadError }
					accept="*"
				/>
			</div>
		);
	}

	return (
		<>
			<FileBlockInspector
				hrefs={ { href, textLinkHref, attachmentPage } }
				{ ...{
					openInNewWindow: !! textLinkTarget,
					showDownloadButton,
					changeLinkDestinationOption,
					changeOpenInNewWindow,
					changeShowDownloadButton,
					displayPreview,
					changeDisplayPreview,
					previewHeight,
					changePreviewHeight,
				} }
			/>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ href }
					accept="*"
					onSelect={ onSelectFile }
					onError={ onUploadError }
				/>
				<ClipboardToolbarButton
					text={ href }
					disabled={ isUploadingBlob }
				/>
			</BlockControls>
			<div { ...blockProps }>
				{ displayPreviewInEditor && (
					<ResizableBox
						size={ { height: previewHeight } }
						minHeight={ MIN_PREVIEW_HEIGHT }
						maxHeight={ MAX_PREVIEW_HEIGHT }
						minWidth="100%"
						grid={ [ 10, 10 ] }
						enable={ {
							top: false,
							right: false,
							bottom: true,
							left: false,
							topRight: false,
							bottomRight: false,
							bottomLeft: false,
							topLeft: false,
						} }
						onResizeStart={ () => toggleSelection( false ) }
						onResizeStop={ handleOnResizeStop }
						showHandle={ isSelected }
					>
						<object
							className="wp-block-file__preview"
							data={ href }
							type="application/pdf"
							aria-label={ __(
								'Embed of the selected PDF file.'
							) }
						/>
						{ ! isSelected && (
							<div className="wp-block-file__preview-overlay" />
						) }
					</ResizableBox>
				) }
				<div className={ 'wp-block-file__content-wrapper' }>
					<RichText
						tagName="a"
						value={ fileName }
						placeholder={ __( 'Write file name…' ) }
						withoutInteractiveFormatting
						onChange={ ( text ) =>
							setAttributes( { fileName: text } )
						}
						href={ textLinkHref }
					/>
					{ showDownloadButton && (
						<div
							className={
								'wp-block-file__button-richtext-wrapper'
							}
						>
							{ /* Using RichText here instead of PlainText so that it can be styled like a button. */ }
							<RichText
								tagName="div" // Must be block-level or else cursor disappears.
								aria-label={ __( 'Download button text' ) }
								className={ classnames(
									'wp-block-file__button',
									__experimentalGetElementClassName(
										'button'
									)
								) }
								value={
									downloadButtonText ??
									_x( 'Download', 'button label' )
								}
								withoutInteractiveFormatting
								placeholder={ __( 'Add text…' ) }
								onChange={ ( text ) =>
									changeDownloadButtonText( text )
								}
							/>
						</div>
					) }
				</div>
			</div>
		</>
	);
}

export default FileEdit;
