/**
 * WordPress dependencies
 */
import { useRef } from '@wordpress/element';
import { useRefEffect } from '@wordpress/compose';
import { ENTER } from '@wordpress/keycodes';
import { insert } from '@wordpress/rich-text';
import { getBlockTransforms, findTransform } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';
import { splitValue } from './split-value';

export function useEnter( props ) {
	const { __unstableMarkAutomaticChange } = useDispatch( blockEditorStore );
	const propsRef = useRef( props );
	propsRef.current = props;
	return useRefEffect( ( element ) => {
		function onKeyDown( event ) {
			if ( event.defaultPrevented ) {
				return;
			}

			if ( event.target !== element ) {
				return;
			}

			if ( event.keyCode !== ENTER ) {
				return;
			}

			const {
				removeEditorOnlyFormats,
				value,
				onReplace,
				onSplit,
				onChange,
				disableLineBreaks,
				onSplitAtEnd,
			} = propsRef.current;

			event.preventDefault();

			const _value = { ...value };
			_value.formats = removeEditorOnlyFormats( value );
			const canSplit = onReplace && onSplit;

			if ( onReplace ) {
				const transforms = getBlockTransforms( 'from' ).filter(
					( { type } ) => type === 'enter'
				);
				const transformation = findTransform( transforms, ( item ) => {
					return item.regExp.test( _value.text );
				} );

				if ( transformation ) {
					onReplace( [
						transformation.transform( {
							content: _value.text,
						} ),
					] );
					__unstableMarkAutomaticChange();
				}
			}

			const { text, start, end } = _value;
			const canSplitAtEnd =
				onSplitAtEnd && start === end && end === text.length;

			if ( event.shiftKey || ( ! canSplit && ! canSplitAtEnd ) ) {
				if ( ! disableLineBreaks ) {
					onChange( insert( _value, '\n' ) );
				}
			} else if ( ! canSplit && canSplitAtEnd ) {
				onSplitAtEnd();
			} else if ( canSplit ) {
				splitValue( {
					value: _value,
					onReplace,
					onSplit,
				} );
			}
		}

		const { body } = element.ownerDocument;

		// Attach the listener to the body so parent elements have the chance
		// to prevent the default behavior.
		body.addEventListener( 'keydown', onKeyDown );
		return () => {
			body.removeEventListener( 'keydown', onKeyDown );
		};
	}, [] );
}
