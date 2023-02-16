/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	ContrastChecker,
	__experimentalColorGradientControl as ColorGradientControl,
	privateApis as blockEditorPrivateApis,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ScreenHeader from './header';
import { useSupportedStyles, useColorsPerOrigin } from './hooks';
import { useContrastCheckerColors } from './color-utils';
import { unlock } from '../../private-apis';

const { useGlobalSetting, useGlobalStyle } = unlock( blockEditorPrivateApis );

function ScreenTextColor( { name, variation = '' } ) {
	const prefix = variation ? `variations.${ variation }.` : '';
	const supports = useSupportedStyles( name );
	const [ areCustomSolidsEnabled ] = useGlobalSetting( 'color.custom', name );
	const [ isTextEnabled ] = useGlobalSetting( 'color.text', name );
	const colorsPerOrigin = useColorsPerOrigin( name );

	const hasTextColor =
		supports.includes( 'color' ) &&
		isTextEnabled &&
		( colorsPerOrigin.length > 0 || areCustomSolidsEnabled );

	const [ color, setColor ] = useGlobalStyle( prefix + 'color.text', name );
	const [ userColor ] = useGlobalStyle( prefix + 'color.text', name, 'user' );

	const { backgroundColor, linkColor } = useContrastCheckerColors(
		name,
		variation
	);

	if ( ! hasTextColor ) {
		return null;
	}

	return (
		<>
			<ScreenHeader
				title={ __( 'Text' ) }
				description={ __(
					'Set the default color used for text across the site.'
				) }
			/>
			<ColorGradientControl
				className="edit-site-screen-text-color__control"
				colors={ colorsPerOrigin }
				disableCustomColors={ ! areCustomSolidsEnabled }
				showTitle={ false }
				enableAlpha
				__experimentalIsRenderedInSidebar
				colorValue={ color }
				onColorChange={ setColor }
				clearable={ color === userColor }
				headingLevel={ 3 }
			/>
			{ name === undefined && (
				<ContrastChecker
					backgroundColor={ backgroundColor }
					textColor={ color }
					linkColor={ linkColor }
				/>
			) }
		</>
	);
}

export default ScreenTextColor;
