/**
 * External dependencies
 */
import type { ComponentProps, ReactText } from 'react';
import styled from '@emotion/styled';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	ToggleGroupControl,
	ToggleGroupControlOption,
} from '../../toggle-group-control';

/**
 * Internal dependencies
 */
import { ToolsPanel, ToolsPanelItem } from '..';
import Panel from '../../panel';
import UnitControl from '../../unit-control';
import { createSlotFill, Provider as SlotFillProvider } from '../../slot-fill';

export default {
	title: 'Components (Experimental)/ToolsPanel',
	component: ToolsPanel,
};

export const _default = () => {
	const [ height, setHeight ] = useState< string | undefined >();
	const [ minHeight, setMinHeight ] = useState< string | undefined >();
	const [ width, setWidth ] = useState< string | undefined >();
	const [ scale, setScale ] = useState< ReactText | undefined >();

	const resetAll = () => {
		setHeight( undefined );
		setWidth( undefined );
		setMinHeight( undefined );
		setScale( undefined );
	};

	return (
		<PanelWrapperView>
			<Panel>
				<ToolsPanel
					label="Tools Panel (default example)"
					resetAll={ resetAll }
				>
					<SingleColumnItem
						hasValue={ () => !! width }
						label="Width"
						onDeselect={ () => setWidth( undefined ) }
						isShownByDefault={ true }
					>
						<UnitControl
							label="Width"
							value={ width }
							onChange={ ( next ) => setWidth( next ) }
						/>
					</SingleColumnItem>
					<SingleColumnItem
						hasValue={ () => !! height }
						label="Height"
						onDeselect={ () => setHeight( undefined ) }
						isShownByDefault={ true }
					>
						<UnitControl
							label="Height"
							value={ height }
							onChange={ ( next ) => setHeight( next ) }
						/>
					</SingleColumnItem>
					<ToolsPanelItem
						hasValue={ () => !! minHeight }
						label="Minimum height"
						onDeselect={ () => setMinHeight( undefined ) }
						isShownByDefault={ true }
					>
						<UnitControl
							label="Minimum height"
							value={ minHeight }
							onChange={ ( next ) => setMinHeight( next ) }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! scale }
						label="Scale"
						onDeselect={ () => setScale( undefined ) }
					>
						<ToggleGroupControl
							__nextHasNoMarginBottom
							label="Scale"
							value={ scale }
							onChange={ ( next ) => setScale( next ) }
							isBlock
						>
							<ToggleGroupControlOption
								value="cover"
								label="Cover"
							/>
							<ToggleGroupControlOption
								value="contain"
								label="Contain"
							/>
							<ToggleGroupControlOption
								value="fill"
								label="Fill"
							/>
						</ToggleGroupControl>
					</ToolsPanelItem>
				</ToolsPanel>
			</Panel>
		</PanelWrapperView>
	);
};

export const WithNonToolsPanelItems = () => {
	const [ height, setHeight ] = useState< string | undefined >();
	const [ width, setWidth ] = useState< string | undefined >();

	const resetAll = () => {
		setHeight( undefined );
		setWidth( undefined );
	};

	return (
		<PanelWrapperView>
			<Panel>
				<ToolsPanel
					label="ToolsPanel (with non-menu items)"
					resetAll={ resetAll }
				>
					<IntroText>
						This text illustrates not all items must be wrapped in a
						ToolsPanelItem and represented in the panel menu.
					</IntroText>
					<SingleColumnItem
						hasValue={ () => !! width }
						label="Width"
						onDeselect={ () => setWidth( undefined ) }
						isShownByDefault={ true }
					>
						<UnitControl
							label="Width"
							value={ width }
							onChange={ ( next ) => setWidth( next ) }
						/>
					</SingleColumnItem>
					<SingleColumnItem
						hasValue={ () => !! height }
						label="Height"
						onDeselect={ () => setHeight( undefined ) }
						isShownByDefault={ true }
					>
						<UnitControl
							label="Height"
							value={ height }
							onChange={ ( next ) => setHeight( next ) }
						/>
					</SingleColumnItem>
				</ToolsPanel>
			</Panel>
		</PanelWrapperView>
	);
};

export const WithOptionalItemsPlusIcon = ( {
	isShownByDefault,
}: Pick< ComponentProps< typeof ToolsPanelItem >, 'isShownByDefault' > ) => {
	const [ height, setHeight ] = useState< string | undefined >();
	const [ width, setWidth ] = useState< string | undefined >();
	const [ minWidth, setMinWidth ] = useState< string | undefined >();

	const resetAll = () => {
		setHeight( undefined );
		setWidth( undefined );
		setMinWidth( undefined );
	};

	return (
		<PanelWrapperView>
			<Panel>
				<ToolsPanel
					label="Tools Panel (optional items only)"
					resetAll={ resetAll }
					key={ isShownByDefault }
				>
					<SingleColumnItem
						hasValue={ () => !! minWidth }
						label="Minimum width"
						onDeselect={ () => setMinWidth( undefined ) }
						isShownByDefault={ isShownByDefault }
					>
						<UnitControl
							label="Minimum width"
							value={ minWidth }
							onChange={ ( next ) => setMinWidth( next ) }
						/>
					</SingleColumnItem>
					<SingleColumnItem
						hasValue={ () => !! width }
						label="Width"
						onDeselect={ () => setWidth( undefined ) }
						isShownByDefault={ false }
					>
						<UnitControl
							label="Width"
							value={ width }
							onChange={ ( next ) => setWidth( next ) }
						/>
					</SingleColumnItem>
					<SingleColumnItem
						hasValue={ () => !! height }
						label="Height"
						onDeselect={ () => setHeight( undefined ) }
						isShownByDefault={ false }
					>
						<UnitControl
							label="Height"
							value={ height }
							onChange={ ( next ) => setHeight( next ) }
						/>
					</SingleColumnItem>
				</ToolsPanel>
			</Panel>
		</PanelWrapperView>
	);
};

WithOptionalItemsPlusIcon.args = {
	isShownByDefault: false,
};

const { Fill: ToolsPanelItems, Slot } = createSlotFill( 'ToolsPanelSlot' );
const panelId = 'unique-tools-panel-id';

export const WithSlotFillItems = () => {
	const [ attributes, setAttributes ] = useState< {
		width?: string;
		height?: string;
	} >( {} );
	const { width, height } = attributes;

	const resetAll: ComponentProps< typeof ToolsPanel >[ 'resetAll' ] = (
		resetFilters = []
	) => {
		let newAttributes = {};

		resetFilters.forEach( ( resetFilter ) => {
			newAttributes = {
				...newAttributes,
				...resetFilter( newAttributes ),
			};
		} );

		setAttributes( newAttributes );
	};

	const updateAttribute = ( name: string, value?: any ) => {
		setAttributes( {
			...attributes,
			[ name ]: value,
		} );
	};

	return (
		<SlotFillProvider>
			<ToolsPanelItems>
				<SingleColumnItem
					hasValue={ () => !! width }
					label="Injected Width"
					onDeselect={ () => updateAttribute( 'width', undefined ) }
					resetAllFilter={ () => ( { width: undefined } ) }
					panelId={ panelId }
				>
					<UnitControl
						label="Injected Width"
						value={ width }
						onChange={ ( next ) =>
							updateAttribute( 'width', next )
						}
					/>
				</SingleColumnItem>
				<SingleColumnItem
					hasValue={ () => !! height }
					label="Injected Height"
					onDeselect={ () => updateAttribute( 'height', undefined ) }
					resetAllFilter={ () => ( { height: undefined } ) }
					panelId={ panelId }
				>
					<UnitControl
						label="Injected Height"
						value={ height }
						onChange={ ( next ) =>
							updateAttribute( 'height', next )
						}
					/>
				</SingleColumnItem>
				<ToolsPanelItem
					hasValue={ () => true }
					label="Item for alternate panel"
					onDeselect={ () => undefined }
					resetAllFilter={ () => undefined }
					panelId={ 'intended-for-another-panel-via-shared-slot' }
				>
					<p>
						This panel item will not be displayed in the demo as its
						panelId does not match the panel being rendered.
					</p>
				</ToolsPanelItem>
			</ToolsPanelItems>
			<PanelWrapperView>
				<Panel>
					<ToolsPanel
						label="Tools Panel With SlotFill Items"
						resetAll={ resetAll }
						panelId={ panelId }
					>
						<Slot />
					</ToolsPanel>
				</Panel>
			</PanelWrapperView>
		</SlotFillProvider>
	);
};

export const WithConditionalDefaultControl = () => {
	const [ attributes, setAttributes ] = useState< {
		height?: string;
		scale?: ReactText;
	} >( {} );
	const { height, scale } = attributes;

	const resetAll: ComponentProps< typeof ToolsPanel >[ 'resetAll' ] = (
		resetFilters = []
	) => {
		let newAttributes = {};

		resetFilters.forEach( ( resetFilter ) => {
			newAttributes = {
				...newAttributes,
				...resetFilter( newAttributes ),
			};
		} );

		setAttributes( newAttributes );
	};

	const updateAttribute = ( name: string, value?: any ) => {
		setAttributes( {
			...attributes,
			[ name ]: value,
		} );
	};

	return (
		<SlotFillProvider>
			<ToolsPanelItems>
				<SingleColumnItem
					hasValue={ () => !! height }
					label="Injected Height"
					onDeselect={ () => updateAttribute( 'height', undefined ) }
					resetAllFilter={ () => ( { height: undefined } ) }
					panelId={ panelId }
					isShownByDefault={ true }
				>
					<UnitControl
						label="Injected Height"
						value={ height }
						onChange={ ( next ) =>
							updateAttribute( 'height', next )
						}
					/>
				</SingleColumnItem>
				<ToolsPanelItem
					hasValue={ () => !! scale }
					label="Scale"
					onDeselect={ () => updateAttribute( 'scale', undefined ) }
					resetAllFilter={ () => ( { scale: undefined } ) }
					panelId={ panelId }
					isShownByDefault={ !! height }
				>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						label="Scale"
						value={ scale }
						onChange={ ( next ) =>
							updateAttribute( 'scale', next )
						}
						isBlock
					>
						<ToggleGroupControlOption value="cover" label="Cover" />
						<ToggleGroupControlOption
							value="contain"
							label="Contain"
						/>
						<ToggleGroupControlOption value="fill" label="Fill" />
					</ToggleGroupControl>
				</ToolsPanelItem>
			</ToolsPanelItems>
			<PanelWrapperView>
				<Panel>
					<ToolsPanel
						label="Tools Panel With Conditional Default via SlotFill"
						resetAll={ resetAll }
						panelId={ panelId }
					>
						<Slot />
					</ToolsPanel>
				</Panel>
			</PanelWrapperView>
		</SlotFillProvider>
	);
};

export const WithConditionallyRenderedControl = () => {
	const [ attributes, setAttributes ] = useState< {
		height?: string;
		scale?: ReactText;
	} >( {} );
	const { height, scale } = attributes;

	const resetAll: ComponentProps< typeof ToolsPanel >[ 'resetAll' ] = (
		resetFilters = []
	) => {
		let newAttributes = {};

		resetFilters.forEach( ( resetFilter ) => {
			newAttributes = {
				...newAttributes,
				...resetFilter( newAttributes ),
			};
		} );

		setAttributes( newAttributes );
	};

	const updateAttribute = ( name: string, value?: any ) => {
		setAttributes( {
			...attributes,
			[ name ]: value,
		} );
	};

	return (
		<SlotFillProvider>
			<ToolsPanelItems>
				<SingleColumnItem
					hasValue={ () => !! height }
					label="Injected Height"
					onDeselect={ () => {
						updateAttribute( 'scale', undefined );
						updateAttribute( 'height', undefined );
					} }
					resetAllFilter={ () => ( { height: undefined } ) }
					panelId={ panelId }
					isShownByDefault={ true }
				>
					<UnitControl
						label="Injected Height"
						value={ height }
						onChange={ ( next ) =>
							updateAttribute( 'height', next )
						}
					/>
				</SingleColumnItem>
				{ !! height && (
					<ToolsPanelItem
						hasValue={ () => !! scale }
						label="Scale"
						onDeselect={ () =>
							updateAttribute( 'scale', undefined )
						}
						resetAllFilter={ () => ( { scale: undefined } ) }
						panelId={ panelId }
						isShownByDefault={ true }
					>
						<ToggleGroupControl
							__nextHasNoMarginBottom
							label="Scale"
							value={ scale }
							onChange={ ( next ) =>
								updateAttribute( 'scale', next )
							}
							isBlock
						>
							<ToggleGroupControlOption
								value="cover"
								label="Cover"
							/>
							<ToggleGroupControlOption
								value="contain"
								label="Contain"
							/>
							<ToggleGroupControlOption
								value="fill"
								label="Fill"
							/>
						</ToggleGroupControl>
					</ToolsPanelItem>
				) }
			</ToolsPanelItems>
			<PanelWrapperView>
				<Panel>
					<ToolsPanel
						label="Tools Panel With Conditionally Rendered Item via SlotFill"
						resetAll={ resetAll }
						panelId={ panelId }
					>
						<Slot />
					</ToolsPanel>
				</Panel>
			</PanelWrapperView>
		</SlotFillProvider>
	);
};

export { ToolsPanelWithItemGroupSlot } from './utils/tools-panel-with-item-group-slot';

const PanelWrapperView = styled.div`
	font-size: 13px;

	.components-dropdown-menu__menu {
		max-width: 220px;
	}
`;

const SingleColumnItem = styled( ToolsPanelItem )`
	grid-column: span 1;
`;

const IntroText = styled.div`
	grid-column: span 2;
`;
