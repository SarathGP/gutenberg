/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useCallback } from '@wordpress/element';
import { __experimentalBlockPatternsList as BlockPatternsList } from '@wordpress/block-editor';
import { MenuItem, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityRecord } from '@wordpress/core-data';
import { useAsyncList } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { store as editSiteStore } from '../../../store';

export default function ReplaceTemplateButton( {
	onClick,
	template,
	availableTemplates,
} ) {
	const { setTemplate } = useDispatch( editSiteStore );
	const [ showModal, setShowModal ] = useState( false );
	const onClose = useCallback( () => {
		setShowModal( false );
	}, [] );

	const { postId, postType } = useSelect( ( select ) => {
		return {
			postId: select( editSiteStore ).getEditedPostId(),
			postType: select( editSiteStore ).getEditedPostType(),
		};
	}, [] );

	const entity = useEntityRecord( 'postType', postType, postId );
	const onTemplateSelect = async ( selectedTemplate ) => {
		//FIXME: This is a hack to get around the fact that the template is not being set correctly.
		await setTemplate( null, null );
		await entity.edit( {
			blocks: selectedTemplate.blocks,
			content: selectedTemplate.content,
		} );
		await setTemplate( postId, template.slug );
		onClose(); // Close the template suggestions modal first.
		onClick();
	};
	return (
		<>
			<MenuItem
				info={ __(
					'Replace this template entirely with another like it.'
				) }
				onClick={ () => setShowModal( true ) }
			>
				{ __( 'Replace template' ) }
			</MenuItem>

			{ showModal && (
				<Modal
					title={ __( 'Choose a template' ) }
					onRequestClose={ onClose }
					overlayClassName="edit-site-template-panel__replace-template-modal"
					isFullScreen
				>
					<div className="edit-site-template-panel__replace-template-modal__content">
						<TemplatesList
							availableTemplates={ availableTemplates }
							onSelect={ onTemplateSelect }
						/>
					</div>
				</Modal>
			) }
		</>
	);
}

function TemplatesList( { availableTemplates, onSelect } ) {
	const shownTemplates = useAsyncList( availableTemplates );

	return (
		<BlockPatternsList
			label={ __( 'Templates' ) }
			blockPatterns={ availableTemplates }
			shownPatterns={ shownTemplates }
			onClickPattern={ onSelect }
		/>
	);
}
