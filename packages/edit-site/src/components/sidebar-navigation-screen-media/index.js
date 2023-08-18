/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';
import { media, video, image, audio, pages } from '@wordpress/icons';
import { getQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import SidebarNavigationItem from '../sidebar-navigation-item';
import SidebarNavigationScreen from '../sidebar-navigation-screen';
import { useLink } from '../routes/link';

function MediaItem( { icon, type, isActive, children } ) {
	const linkInfo = useLink( {
		path: '/media',
		mediaType: type,
	} );
	return (
		<SidebarNavigationItem
			{ ...linkInfo }
			icon={ icon }
			aria-current={ isActive ? 'true' : undefined }
		>
			{ children }
		</SidebarNavigationItem>
	);
}

export default function SidebarNavigationScreenMedia() {
	const { mediaType } = getQueryArgs( window.location.href );
	return (
		<SidebarNavigationScreen
			title={ __( 'Media' ) }
			description={ __( "Browse and manage your site's media." ) }
			actions={ null }
			content={
				<ItemGroup>
					<MediaItem
						icon={ media }
						type="all"
						isActive={ mediaType === 'all' }
					>
						{ __( 'All media' ) }
					</MediaItem>
					<MediaItem
						icon={ image }
						type="image"
						isActive={ mediaType === 'image' }
					>
						{ __( 'Images' ) }
					</MediaItem>
					<MediaItem
						icon={ video }
						type="video"
						isActive={ mediaType === 'video' }
					>
						{ __( 'Videos' ) }
					</MediaItem>
					<MediaItem
						icon={ audio }
						type="audio"
						isActive={ mediaType === 'audio' }
					>
						{ __( 'Audio' ) }
					</MediaItem>
					<MediaItem
						icon={ pages }
						type="application"
						isActive={ mediaType === 'application' }
					>
						{ __( 'Documents' ) }
					</MediaItem>
				</ItemGroup>
			}
		/>
	);
}
