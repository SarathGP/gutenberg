"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6762],{"./packages/components/build-module/custom-select-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return StableCustomSelectControl},Z:function(){return CustomSelectControl}});var react=__webpack_require__("./node_modules/react/index.js"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),check=__webpack_require__("./packages/icons/build-module/library/check.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),deprecated_build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),component=__webpack_require__("./packages/components/build-module/visually-hidden/component.js"),select_control_styles=__webpack_require__("./packages/components/build-module/select-control/styles/select-control-styles.js"),chevron_down=__webpack_require__("./packages/components/build-module/select-control/chevron-down.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),input_base=__webpack_require__("./packages/components/build-module/input-control/input-base.js"),input_control_styles=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js");const backCompatMinWidth=props=>props.__nextUnconstrainedWidth?"":(0,emotion_react_browser_esm.iv)(input_control_styles.W2,"{min-width:130px;}","","",""),InputBaseWithBackCompatMinWidth=(0,emotion_styled_base_browser_esm.Z)(input_base.Z,{target:"eswuck60"})(backCompatMinWidth,";");var base_control_styles=__webpack_require__("./packages/components/build-module/base-control/styles/base-control-styles.js");const itemToString=item=>item?.name,stateReducer=({selectedItem:selectedItem},{type:type,changes:changes,props:{items:items}})=>{switch(type){case downshift_esm.L7.stateChangeTypes.ToggleButtonKeyDownArrowDown:return{selectedItem:items[selectedItem?Math.min(items.indexOf(selectedItem)+1,items.length-1):0]};case downshift_esm.L7.stateChangeTypes.ToggleButtonKeyDownArrowUp:return{selectedItem:items[selectedItem?Math.max(items.indexOf(selectedItem)-1,0):items.length-1]};default:return changes}};function CustomSelectControl(props){const{__next36pxDefaultSize:__next36pxDefaultSize=!1,__nextUnconstrainedWidth:__nextUnconstrainedWidth=!1,className:className,hideLabelFromVision:hideLabelFromVision,label:label,describedBy:describedBy,options:items,onChange:onSelectedItemChange,size:size="default",value:_selectedItem,onMouseOver:onMouseOver,onMouseOut:onMouseOut,onFocus:onFocus,onBlur:onBlur,__experimentalShowSelectedHint:__experimentalShowSelectedHint=!1}=props,{getLabelProps:getLabelProps,getToggleButtonProps:getToggleButtonProps,getMenuProps:getMenuProps,getItemProps:getItemProps,isOpen:isOpen,highlightedIndex:highlightedIndex,selectedItem:selectedItem}=(0,downshift_esm.L7)({initialSelectedItem:items[0],items:items,itemToString:itemToString,onSelectedItemChange:onSelectedItemChange,...null!=_selectedItem?{selectedItem:_selectedItem}:void 0,stateReducer:stateReducer}),[isFocused,setIsFocused]=(0,react.useState)(!1);__nextUnconstrainedWidth||(0,deprecated_build_module.Z)("Constrained width styles for wp.components.CustomSelectControl",{since:"6.1",version:"6.4",hint:"Set the `__nextUnconstrainedWidth` prop to true to start opting into the new styles, which will become the default in a future version"});const menuProps=getMenuProps({className:"components-custom-select-control__menu","aria-hidden":!isOpen}),onKeyDownHandler=(0,react.useCallback)((e=>{e.stopPropagation(),menuProps?.onKeyDown?.(e)}),[menuProps]);return menuProps["aria-activedescendant"]?.startsWith("downshift-null")&&delete menuProps["aria-activedescendant"],(0,react.createElement)("div",{className:classnames_default()("components-custom-select-control",className)},hideLabelFromVision?(0,react.createElement)(component.Z,{as:"label",...getLabelProps()},label):(0,react.createElement)(base_control_styles.ar,{...getLabelProps({className:"components-custom-select-control__label"})},label),(0,react.createElement)(InputBaseWithBackCompatMinWidth,{__next36pxDefaultSize:__next36pxDefaultSize,__nextUnconstrainedWidth:__nextUnconstrainedWidth,isFocused:isOpen||isFocused,__unstableInputWidth:__nextUnconstrainedWidth?void 0:"auto",labelPosition:__nextUnconstrainedWidth?void 0:"top",size:size,suffix:(0,react.createElement)(chevron_down.Z,null)},(0,react.createElement)(select_control_styles.Ph,{onMouseOver:onMouseOver,onMouseOut:onMouseOut,as:"button",onFocus:function handleOnFocus(e){setIsFocused(!0),onFocus?.(e)},onBlur:function handleOnBlur(e){setIsFocused(!1),onBlur?.(e)},selectSize:size,__next36pxDefaultSize:__next36pxDefaultSize,...getToggleButtonProps({"aria-label":label,"aria-labelledby":void 0,className:"components-custom-select-control__button",describedBy:function getDescribedBy(){return describedBy||(selectedItem?(0,build_module.gB)((0,build_module.__)("Currently selected: %s"),selectedItem.name):(0,build_module.__)("No selection"))}()})},itemToString(selectedItem),__experimentalShowSelectedHint&&selectedItem.__experimentalHint&&(0,react.createElement)("span",{className:"components-custom-select-control__hint"},selectedItem.__experimentalHint))),(0,react.createElement)("ul",{...menuProps,onKeyDown:onKeyDownHandler},isOpen&&items.map(((item,index)=>(0,react.createElement)("li",{...getItemProps({item:item,index:index,key:item.key,className:classnames_default()(item.className,"components-custom-select-control__item",{"is-highlighted":index===highlightedIndex,"has-hint":!!item.__experimentalHint,"is-next-36px-default-size":__next36pxDefaultSize}),style:item.style})},item.name,item.__experimentalHint&&(0,react.createElement)("span",{className:"components-custom-select-control__item-hint"},item.__experimentalHint),item===selectedItem&&(0,react.createElement)(icon.Z,{icon:check.Z,className:"components-custom-select-control__item-icon"}))))))}function StableCustomSelectControl(props){return(0,react.createElement)(CustomSelectControl,{...props,__experimentalShowSelectedHint:!1})}},"./packages/components/build-module/flex/flex-block/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return flex_block_component}});var react=__webpack_require__("./node_modules/react/index.js"),context_connect=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),use_context_system=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),hook=__webpack_require__("./packages/components/build-module/flex/flex-item/hook.js");var flex_block_component=(0,context_connect.Iq)((function UnconnectedFlexBlock(props,forwardedRef){const flexBlockProps=function useFlexBlock(props){const otherProps=(0,use_context_system.y)(props,"FlexBlock");return(0,hook.i)({isBlock:!0,...otherProps})}(props);return(0,react.createElement)(component.Z,{...flexBlockProps,ref:forwardedRef})}),"FlexBlock")},"./packages/components/build-module/private-apis.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{YH:function(){return privateApis}});var implementation=__webpack_require__("./packages/private-apis/build-module/implementation.js"),custom_select_control=__webpack_require__("./packages/components/build-module/custom-select-control/index.js"),utils=__webpack_require__("./packages/components/build-module/popover/utils.js"),react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js");const animateProgressBar=(0,emotion_react_browser_esm.F4)({"0%":{left:"-50%"},"100%":{left:"100%"}}),Track=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e15u147w2"})("position:relative;overflow:hidden;width:100%;max-width:160px;height:",config_values.Z.borderWidthFocus,";background-color:var(\n\t\t--wp-components-color-gray-300,\n\t\t",colors_values.D.gray[300],"\n\t);border-radius:",config_values.Z.radiusBlockUi,";"),Indicator=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e15u147w1"})("display:inline-block;position:absolute;top:0;height:100%;border-radius:",config_values.Z.radiusBlockUi,";background-color:",colors_values.D.theme.accent,";",(({isIndeterminate:isIndeterminate,value:value})=>isIndeterminate?(0,emotion_react_browser_esm.iv)({animationDuration:"1.5s",animationTimingFunction:"ease-in-out",animationIterationCount:"infinite",animationName:animateProgressBar,width:"50%"},"","","",""):(0,emotion_react_browser_esm.iv)({width:`${value}%`,transition:"width 0.4s ease-in-out"},"","","","")),";"),ProgressElement=(0,emotion_styled_base_browser_esm.Z)("progress",{target:"e15u147w0"})({name:"11fb690",styles:"position:absolute;top:0;left:0;opacity:0;width:100%;height:100%"});var progress_bar=(0,react.forwardRef)((function UnforwardedProgressBar(props,ref){const{className:className,value:value,...progressProps}=props,isIndeterminate=!Number.isFinite(value);return(0,react.createElement)(Track,{className:className},(0,react.createElement)(Indicator,{isIndeterminate:isIndeterminate,value:value}),(0,react.createElement)(ProgressElement,{max:100,value:value,"aria-label":(0,build_module.__)("Loading …"),ref:ref,...progressProps}))})),slot_fill=__webpack_require__("./packages/components/build-module/slot-fill/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js"),chevron_right_small=__webpack_require__("./packages/icons/build-module/library/chevron-right-small.js"),line_solid=__webpack_require__("./packages/icons/build-module/library/line-solid.js"),check=__webpack_require__("./packages/icons/build-module/library/check.js"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),use_slot=__webpack_require__("./packages/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),icon=__webpack_require__("./packages/components/build-module/icon/index.js"),popover=__webpack_require__("./packages/components/build-module/popover/index.js"),font=__webpack_require__("./packages/components/build-module/utils/font.js"),rtl=__webpack_require__("./packages/components/build-module/utils/rtl.js"),space=__webpack_require__("./packages/components/build-module/ui/utils/space.js");const ANIMATION_PARAMS_SLIDE_AMOUNT="2px",ANIMATION_PARAMS_DURATION="400ms",ANIMATION_PARAMS_EASING="cubic-bezier( 0.16, 1, 0.3, 1 )",CONTENT_WRAPPER_PADDING=(0,space.D)(2),ITEM_PREFIX_WIDTH=(0,space.D)(7),ITEM_PADDING_INLINE_START=(0,space.D)(2),ITEM_PADDING_INLINE_END=(0,space.D)(2.5),DEFAULT_BORDER_COLOR=colors_values.D.ui.borderDisabled,TOOLBAR_VARIANT_BORDER_COLOR=colors_values.D.gray[900],DEFAULT_BOX_SHADOW=`0 0 0 ${config_values.Z.borderWidth} ${DEFAULT_BORDER_COLOR}, ${config_values.Z.popoverShadow}`,TOOLBAR_VARIANT_BOX_SHADOW=`0 0 0 ${config_values.Z.borderWidth} ${TOOLBAR_VARIANT_BORDER_COLOR}`,slideUpAndFade=(0,emotion_react_browser_esm.F4)({"0%":{opacity:0,transform:`translateY(${ANIMATION_PARAMS_SLIDE_AMOUNT})`},"100%":{opacity:1,transform:"translateY(0)"}}),slideRightAndFade=(0,emotion_react_browser_esm.F4)({"0%":{opacity:0,transform:`translateX(-${ANIMATION_PARAMS_SLIDE_AMOUNT})`},"100%":{opacity:1,transform:"translateX(0)"}}),slideDownAndFade=(0,emotion_react_browser_esm.F4)({"0%":{opacity:0,transform:`translateY(-${ANIMATION_PARAMS_SLIDE_AMOUNT})`},"100%":{opacity:1,transform:"translateY(0)"}}),slideLeftAndFade=(0,emotion_react_browser_esm.F4)({"0%":{opacity:0,transform:`translateX(${ANIMATION_PARAMS_SLIDE_AMOUNT})`},"100%":{opacity:1,transform:"translateX(0)"}}),baseContent=variant=>(0,emotion_react_browser_esm.iv)("min-width:220px;background-color:",colors_values.D.ui.background,";border-radius:",config_values.Z.radiusBlockUi,";padding:",CONTENT_WRAPPER_PADDING,";box-shadow:","toolbar"===variant?TOOLBAR_VARIANT_BOX_SHADOW:DEFAULT_BOX_SHADOW,";animation-duration:",ANIMATION_PARAMS_DURATION,";animation-timing-function:",ANIMATION_PARAMS_EASING,";will-change:transform,opacity;&[data-side='top']{animation-name:",slideDownAndFade,";}&[data-side='right']{animation-name:",slideLeftAndFade,";}&[data-side='bottom']{animation-name:",slideUpAndFade,";}&[data-side='left']{animation-name:",slideRightAndFade,";}@media ( prefers-reduced-motion ){animation-duration:0s;}","","",""),itemPrefix=(0,emotion_react_browser_esm.iv)("width:",ITEM_PREFIX_WIDTH,";display:inline-flex;align-items:center;justify-content:center;margin-inline-start:calc( -1 * ",ITEM_PADDING_INLINE_START," );margin-top:",(0,space.D)(-2),";margin-bottom:",(0,space.D)(-2),";","","",""),itemSuffix=(0,emotion_react_browser_esm.iv)("width:max-content;display:inline-flex;align-items:center;justify-content:center;margin-inline-start:auto;padding-inline-start:",(0,space.D)(6),";margin-top:",(0,space.D)(-2),";margin-bottom:",(0,space.D)(-2),";opacity:0.6;[data-highlighted]>&,[data-state='open']>&,[data-disabled]>&{opacity:1;}","","",""),ItemPrefixWrapper=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1kdzosf11"})(itemPrefix,";"),ItemSuffixWrapper=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1kdzosf10"})(itemSuffix,";"),baseItem=(0,emotion_react_browser_esm.iv)("all:unset;font-size:",(0,font.L)("default.fontSize"),";font-family:inherit;font-weight:normal;line-height:20px;color:",colors_values.D.gray[900],";border-radius:",config_values.Z.radiusBlockUi,";display:flex;align-items:center;padding:",(0,space.D)(2)," ",ITEM_PADDING_INLINE_END," ",(0,space.D)(2)," ",ITEM_PADDING_INLINE_START,";position:relative;user-select:none;outline:none;&[data-disabled]{opacity:0.5;pointer-events:none;}&[data-highlighted]{background-color:",colors_values.D.gray[100],";outline:2px solid transparent;}svg{fill:currentColor;}&:not( :has( ",ItemPrefixWrapper," ) ){padding-inline-start:",ITEM_PREFIX_WIDTH,";}","","",""),Content=(0,emotion_styled_base_browser_esm.Z)(index_module.VY,{target:"e1kdzosf9"})((props=>baseContent(props.variant)),";"),SubContent=(0,emotion_styled_base_browser_esm.Z)(index_module.tu,{target:"e1kdzosf8"})((props=>baseContent(props.variant)),";"),Item=(0,emotion_styled_base_browser_esm.Z)(index_module.ck,{target:"e1kdzosf7"})(baseItem,";"),CheckboxItem=(0,emotion_styled_base_browser_esm.Z)(index_module.oC,{target:"e1kdzosf6"})(baseItem,";"),RadioItem=(0,emotion_styled_base_browser_esm.Z)(index_module.Rk,{target:"e1kdzosf5"})(baseItem,";"),SubTrigger=(0,emotion_styled_base_browser_esm.Z)(index_module.fF,{target:"e1kdzosf4"})(baseItem," &[data-state='open']{background-color:",colors_values.D.gray[100],";}"),Label=(0,emotion_styled_base_browser_esm.Z)(index_module.__,{target:"e1kdzosf3"})("box-sizing:border-box;display:flex;align-items:center;min-height:",(0,space.D)(8),";padding:",(0,space.D)(2)," ",ITEM_PADDING_INLINE_END," ",(0,space.D)(2)," ",ITEM_PREFIX_WIDTH,";color:",colors_values.D.gray[700],";font-size:11px;line-height:1.4;font-weight:500;text-transform:uppercase;"),Separator=(0,emotion_styled_base_browser_esm.Z)(index_module.Z0,{target:"e1kdzosf2"})("height:",config_values.Z.borderWidth,";background-color:",(props=>"toolbar"===props.variant?TOOLBAR_VARIANT_BORDER_COLOR:DEFAULT_BORDER_COLOR),";margin:",(0,space.D)(2)," calc( -1 * ",CONTENT_WRAPPER_PADDING," );"),ItemIndicator=(0,emotion_styled_base_browser_esm.Z)(index_module.wU,{target:"e1kdzosf1"})({name:"pl708y",styles:"display:inline-flex;align-items:center;justify-content:center"}),SubmenuRtlChevronIcon=(0,emotion_styled_base_browser_esm.Z)(icon.Z,{target:"e1kdzosf0"})((0,rtl.b)({transform:`scaleX(1) translateX(${(0,space.D)(2)})`},{transform:`scaleX(-1) translateX(${(0,space.D)(2)})`}),";"),DropdownMenuPrivateContext=(0,react.createContext)({variant:void 0,portalContainer:null}),DropdownMenu=(0,context_connect.Kc)((props=>{const{defaultOpen:defaultOpen,open:open,onOpenChange:onOpenChange,modal:modal=!0,side:side="bottom",sideOffset:sideOffset=0,align:align="center",alignOffset:alignOffset=0,children:children,trigger:trigger,variant:variant}=(0,use_context_system.y)(props,"DropdownMenu"),slot=(0,use_slot.Z)(popover._X),portalContainer=slot.ref?.current,privateContextValue=(0,react.useMemo)((()=>({variant:variant,portalContainer:portalContainer})),[variant,portalContainer]);return(0,react.createElement)(index_module.fC,{defaultOpen:defaultOpen,open:open,onOpenChange:onOpenChange,modal:modal,dir:(0,build_module.dZ)()?"rtl":"ltr"},(0,react.createElement)(index_module.xz,{asChild:!0},trigger),(0,react.createElement)(index_module.Uv,{container:portalContainer},(0,react.createElement)(Content,{side:side,align:align,sideOffset:sideOffset,alignOffset:alignOffset,loop:!0,variant:variant},(0,react.createElement)(DropdownMenuPrivateContext.Provider,{value:privateContextValue},children))))}),"DropdownMenu"),DropdownMenuItem=(0,react.forwardRef)((({children:children,prefix:prefix,suffix:suffix,...props},forwardedRef)=>(0,react.createElement)(Item,{...props,ref:forwardedRef},prefix&&(0,react.createElement)(ItemPrefixWrapper,null,prefix),children,suffix&&(0,react.createElement)(ItemSuffixWrapper,null,suffix)))),radioDot=(0,react.createElement)(svg.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,react.createElement)(svg.Cd,{cx:12,cy:12,r:3,fill:"currentColor"}));var context_system_provider=__webpack_require__("./packages/components/build-module/ui/context/context-system-provider.js");const Wrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1krjpvb0"})("");var colord=__webpack_require__("./node_modules/colord/index.mjs"),a11y=__webpack_require__("./node_modules/colord/plugins/a11y.mjs"),names=__webpack_require__("./node_modules/colord/plugins/names.mjs"),warning_build_module=__webpack_require__("./packages/warning/build-module/index.js");function generateThemeVariables(inputs){!function validateInputs(inputs){for(const[key,value]of Object.entries(inputs))void 0===value||(0,colord.Vi)(value).isValid()||"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,warning_build_module.Z)(`wp.components.Theme: "${value}" is not a valid color value for the '${key}' prop.`)}(inputs);const generatedColors={...generateAccentDependentColors(inputs.accent),...generateBackgroundDependentColors(inputs.background)};return function warnContrastIssues(issues){for(const error of Object.values(issues))error&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,warning_build_module.Z)("wp.components.Theme: "+error)}(function checkContrasts(inputs,outputs){const background=inputs.background||colors_values.D.white,accent=inputs.accent||"#3858e9",foreground=outputs.foreground||colors_values.D.gray[900],gray=outputs.gray||colors_values.D.gray;return{accent:(0,colord.Vi)(background).isReadable(accent)?void 0:`The background color ("${background}") does not have sufficient contrast against the accent color ("${accent}").`,foreground:(0,colord.Vi)(background).isReadable(foreground)?void 0:`The background color provided ("${background}") does not have sufficient contrast against the standard foreground colors.`,grays:(0,colord.Vi)(background).contrast(gray[600])>=3&&(0,colord.Vi)(background).contrast(gray[700])>=4.5?void 0:`The background color provided ("${background}") cannot generate a set of grayscale foreground colors with sufficient contrast. Try adjusting the color to be lighter or darker.`}}(inputs,generatedColors)),{colors:generatedColors}}function generateAccentDependentColors(accent){return accent?{accent:accent,accentDarker10:(0,colord.Vi)(accent).darken(.1).toHex(),accentDarker20:(0,colord.Vi)(accent).darken(.2).toHex(),accentInverted:getForegroundForColor(accent)}:{}}function generateBackgroundDependentColors(background){if(!background)return{};const foreground=getForegroundForColor(background);return{background:background,foreground:foreground,foregroundInverted:getForegroundForColor(foreground),gray:generateShades(background,foreground)}}function getForegroundForColor(color){return(0,colord.Vi)(color).isDark()?colors_values.D.white:colors_values.D.gray[900]}function generateShades(background,foreground){const direction=(0,colord.Vi)(background).isDark()?"lighten":"darken",range=Math.abs((0,colord.Vi)(background).toHsl().l-(0,colord.Vi)(foreground).toHsl().l)/100,result={};return Object.entries({100:.06,200:.121,300:.132,400:.2,600:.42,700:.543,800:.821}).forEach((([key,value])=>{result[parseInt(key)]=(0,colord.Vi)(background)[direction](value/.884*range).toHex()})),result}(0,colord.l7)([names.Z,a11y.Z]);var use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");var theme=function Theme({accent:accent,background:background,className:className,...props}){const cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(...(({colors:colors})=>{const shades=Object.entries(colors.gray||{}).map((([k,v])=>`--wp-components-color-gray-${k}: ${v};`)).join("");return[(0,emotion_react_browser_esm.iv)("--wp-components-color-accent:",colors.accent,";--wp-components-color-accent-darker-10:",colors.accentDarker10,";--wp-components-color-accent-darker-20:",colors.accentDarker20,";--wp-components-color-accent-inverted:",colors.accentInverted,";--wp-components-color-background:",colors.background,";--wp-components-color-foreground:",colors.foreground,";--wp-components-color-foreground-inverted:",colors.foregroundInverted,";",shades,";","","","")]})(generateThemeVariables({accent:accent,background:background})),className)),[accent,background,className,cx]);return(0,react.createElement)(Wrapper,{className:classes,...props})};const{lock:lock,unlock:unlock}=(0,implementation.es)("I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.","@wordpress/components"),privateApis={};lock(privateApis,{CustomSelectControl:custom_select_control.Z,__experimentalPopoverLegacyPositionToPlacement:utils.KF,createPrivateSlotFill:slot_fill.Es,ComponentsContext:context_system_provider.Cd,DropdownMenuV2:DropdownMenu,DropdownMenuCheckboxItemV2:({children:children,checked:checked=!1,suffix:suffix,...props})=>(0,react.createElement)(CheckboxItem,{...props,checked:checked},(0,react.createElement)(ItemPrefixWrapper,null,(0,react.createElement)(ItemIndicator,null,("indeterminate"===checked||!0===checked)&&(0,react.createElement)(icon.Z,{icon:"indeterminate"===checked?line_solid.Z:check.Z,size:24}))),children,suffix&&(0,react.createElement)(ItemSuffixWrapper,null,suffix)),DropdownMenuGroupV2:props=>(0,react.createElement)(index_module.ZA,{...props}),DropdownMenuItemV2:DropdownMenuItem,DropdownMenuLabelV2:props=>(0,react.createElement)(Label,{...props}),DropdownMenuRadioGroupV2:props=>(0,react.createElement)(index_module.Ee,{...props}),DropdownMenuRadioItemV2:({children:children,suffix:suffix,...props})=>(0,react.createElement)(RadioItem,{...props},(0,react.createElement)(ItemPrefixWrapper,null,(0,react.createElement)(ItemIndicator,null,(0,react.createElement)(icon.Z,{icon:radioDot,size:22}))),children,suffix&&(0,react.createElement)(ItemSuffixWrapper,null,suffix)),DropdownMenuSeparatorV2:props=>{const{variant:variant}=(0,react.useContext)(DropdownMenuPrivateContext);return(0,react.createElement)(Separator,{...props,variant:variant})},DropdownSubMenuV2:({defaultOpen:defaultOpen,open:open,onOpenChange:onOpenChange,disabled:disabled,textValue:textValue,children:children,trigger:trigger})=>{const{variant:variant,portalContainer:portalContainer}=(0,react.useContext)(DropdownMenuPrivateContext);return(0,react.createElement)(index_module.Tr,{defaultOpen:defaultOpen,open:open,onOpenChange:onOpenChange},(0,react.createElement)(SubTrigger,{disabled:disabled,textValue:textValue},trigger),(0,react.createElement)(index_module.Uv,{container:portalContainer},(0,react.createElement)(SubContent,{loop:!0,sideOffset:16,alignOffset:-8,variant:variant},children)))},DropdownSubMenuTriggerV2:({prefix:prefix,suffix:suffix=(0,react.createElement)(SubmenuRtlChevronIcon,{icon:chevron_right_small.Z,size:24}),children:children})=>(0,react.createElement)(react.Fragment,null,prefix&&(0,react.createElement)(ItemPrefixWrapper,null,prefix),children,suffix&&(0,react.createElement)(ItemSuffixWrapper,null,suffix)),ProgressBar:progress_bar,Theme:theme})},"./packages/components/build-module/spinner/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return spinner}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js");const spinAnimation=emotion_react_browser_esm.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,StyledSpinner=(0,emotion_styled_base_browser_esm.Z)("svg",{target:"ea4tfvq2"})("width:",config_values.Z.spinnerSize,"px;height:",config_values.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",colors_values.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),commonPathProps={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},SpinnerTrack=(0,emotion_styled_base_browser_esm.Z)("circle",{target:"ea4tfvq1"})(commonPathProps,";stroke:",colors_values.D.gray[300],";"),SpinnerIndicator=(0,emotion_styled_base_browser_esm.Z)("path",{target:"ea4tfvq0"})(commonPathProps,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",spinAnimation,";");var spinner=(0,react.forwardRef)((function UnforwardedSpinner({className:className,...props},forwardedRef){return(0,react.createElement)(StyledSpinner,{className:classnames_default()("components-spinner",className),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...props,ref:forwardedRef},(0,react.createElement)(SpinnerTrack,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,react.createElement)(SpinnerIndicator,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}))},"./packages/components/build-module/toggle-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return toggle_control}});var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),component=__webpack_require__("./packages/components/build-module/flex/flex-block/component.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const noop=()=>{};var form_toggle=function FormToggle(props){const{className:className,checked:checked,id:id,disabled:disabled,onChange:onChange=noop,...additionalProps}=props,wrapperClasses=classnames_default()("components-form-toggle",className,{"is-checked":checked,"is-disabled":disabled});return(0,react.createElement)("span",{className:wrapperClasses},(0,react.createElement)("input",{className:"components-form-toggle__input",id:id,type:"checkbox",checked:checked,onChange:onChange,disabled:disabled,...additionalProps}),(0,react.createElement)("span",{className:"components-form-toggle__track"}),(0,react.createElement)("span",{className:"components-form-toggle__thumb"}))},base_control=__webpack_require__("./packages/components/build-module/base-control/index.js"),h_stack_component=__webpack_require__("./packages/components/build-module/h-stack/component.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),space=__webpack_require__("./packages/components/build-module/ui/utils/space.js");var toggle_control=function ToggleControl({__nextHasNoMarginBottom:__nextHasNoMarginBottom,label:label,checked:checked,help:help,className:className,onChange:onChange,disabled:disabled}){const id=`inspector-toggle-control-${(0,use_instance_id.Z)(ToggleControl)}`,classes=(0,use_cx.I)()("components-toggle-control",className,!__nextHasNoMarginBottom&&(0,emotion_react_browser_esm.iv)({marginBottom:(0,space.D)(3)},"","","",""));let describedBy,helpLabel;return help&&("function"==typeof help?void 0!==checked&&(helpLabel=help(checked)):helpLabel=help,helpLabel&&(describedBy=id+"__help")),(0,react.createElement)(base_control.ZP,{id:id,help:helpLabel,className:classes,__nextHasNoMarginBottom:!0},(0,react.createElement)(h_stack_component.Z,{justify:"flex-start",spacing:3},(0,react.createElement)(form_toggle,{id:id,checked:checked,onChange:function onChangeToggle(event){onChange(event.target.checked)},"aria-describedby":describedBy,disabled:disabled}),(0,react.createElement)(component.Z,{as:"label",htmlFor:id,className:"components-toggle-control__label"},label)))}},"./packages/compose/build-module/higher-order/pure/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/is-shallow-equal/build-module/index.js");const pure=(0,__webpack_require__("./packages/compose/build-module/utils/create-higher-order-component/index.js").o)((function(WrappedComponent){return WrappedComponent.prototype instanceof _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component?class extends WrappedComponent{shouldComponentUpdate(nextProps,nextState){return!(0,_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__.ZP)(nextProps,this.props)||!(0,_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__.ZP)(nextState,this.state)}}:class extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component{shouldComponentUpdate(nextProps){return!(0,_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__.ZP)(nextProps,this.props)}render(){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(WrappedComponent,{...this.props})}}}),"pure");__webpack_exports__.Z=pure},"./packages/compose/build-module/hooks/use-debounce/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useDebounce}});var use_memo_one__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/use-memo-one/dist/use-memo-one.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_utils_debounce__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/utils/debounce/index.js");function useDebounce(fn,wait,options){const debounced=(0,use_memo_one__WEBPACK_IMPORTED_MODULE_0__.Pr)((()=>(0,_utils_debounce__WEBPACK_IMPORTED_MODULE_1__.D)(fn,null!=wait?wait:0,options)),[fn,wait,options]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>debounced.cancel()),[debounced]),debounced}},"./packages/compose/build-module/utils/create-higher-order-component/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return createHigherOrderComponent}});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pascal-case/dist.es2015/index.js");function createHigherOrderComponent(mapComponent,modifierName){return Inner=>{const Outer=mapComponent(Inner);return Outer.displayName=hocName(modifierName,Inner),Outer}}const hocName=(name,Inner)=>{const inner=Inner.displayName||Inner.name||"Component";return`${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.Ho)(null!=name?name:"")}(${inner})`}},"./packages/compose/build-module/utils/debounce/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return debounce}});const debounce=(func,wait,options)=>{let lastArgs,lastThis,result,timerId,lastCallTime,maxWait=0,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;function invokeFunc(time){const args=lastArgs,thisArg=lastThis;return lastArgs=void 0,lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args),result}function startTimer(pendingFunc,waitTime){timerId=setTimeout(pendingFunc,waitTime)}function getTimeSinceLastCall(time){return time-(lastCallTime||0)}function shouldInvoke(time){const timeSinceLastCall=getTimeSinceLastCall(time);return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){const time=Date.now();if(shouldInvoke(time))return trailingEdge(time);startTimer(timerExpired,function remainingWait(time){const timeSinceLastCall=getTimeSinceLastCall(time),timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?Math.min(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting}(time))}function clearTimer(){timerId=void 0}function trailingEdge(time){return clearTimer(),trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function pending(){return void 0!==timerId}function debounced(...args){const time=Date.now(),isInvoking=shouldInvoke(time);if(lastArgs=args,lastThis=this,lastCallTime=time,isInvoking){if(!pending())return function leadingEdge(time){return lastInvokeTime=time,startTimer(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return startTimer(timerExpired,wait),invokeFunc(lastCallTime)}return pending()||startTimer(timerExpired,wait),result}return options&&(leading=!!options.leading,maxing="maxWait"in options,void 0!==options.maxWait&&(maxWait=Math.max(options.maxWait,wait)),trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){!function cancelTimer(){void 0!==timerId&&clearTimeout(timerId)}(),lastInvokeTime=0,clearTimer(),lastArgs=lastCallTime=lastThis=void 0},debounced.flush=function flush(){return pending()?trailingEdge(Date.now()):result},debounced.pending=pending,debounced}},"./packages/data/build-module/components/with-select/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/compose/build-module/utils/create-higher-order-component/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/higher-order/pure/index.js"),_use_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/data/build-module/components/use-select/index.js");__webpack_exports__.Z=mapSelectToProps=>(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.o)((WrappedComponent=>(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.Z)((ownProps=>{const mergeProps=(0,_use_select__WEBPACK_IMPORTED_MODULE_2__.Z)(((select,registry)=>mapSelectToProps(select,ownProps,registry)));return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(WrappedComponent,{...ownProps,...mergeProps})}))),"withSelect")},"./packages/icons/build-module/library/chevron-right-small.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const chevronRightSmall=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"}));__webpack_exports__.Z=chevronRightSmall},"./packages/icons/build-module/library/external.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const external=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}));__webpack_exports__.Z=external},"./packages/icons/build-module/library/line-solid.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const lineSolid=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M5 11.25h14v1.5H5z"}));__webpack_exports__.Z=lineSolid}}]);
//# sourceMappingURL=6762.3e7ba023.iframe.bundle.js.map