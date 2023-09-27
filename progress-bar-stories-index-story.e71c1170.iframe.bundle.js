"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9170],{"./packages/components/src/ui/utils/space.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return space}});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/utils/config-values.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _ui_utils_space__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/utils/space.ts"),_colors_values__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/utils/colors-values.js");const CONTROL_PROPS={controlSurfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlTextActiveColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent,controlPaddingX:"12px",controlPaddingXLarge:"calc(12px * 1.3334)",controlPaddingXSmall:"calc(12px / 1.3334)",controlBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent}`,controlDestructiveBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.alert.red,controlHeight:"36px",controlHeightXSmall:"calc( 36px * 0.6 )",controlHeightSmall:"calc( 36px * 0.8 )",controlHeightLarge:"calc( 36px * 1.2 )",controlHeightXLarge:"calc( 36px * 1.4 )"},TOGGLE_GROUP_CONTROL_PROPS={toggleGroupControlBackgroundColor:CONTROL_PROPS.controlBackgroundColor,toggleGroupControlBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlBackdropBackgroundColor:CONTROL_PROPS.controlSurfaceColor,toggleGroupControlBackdropBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlButtonColorActive:CONTROL_PROPS.controlBackgroundColor};__webpack_exports__.Z=Object.assign({},CONTROL_PROPS,TOGGLE_GROUP_CONTROL_PROPS,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(2)}`,cardPaddingSmall:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)}`,cardPaddingMedium:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)} ${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)}`,cardPaddingLarge:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)} ${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"./packages/components/src/progress-bar/stories/index.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_story}});var build_module=__webpack_require__("./packages/i18n/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const animateProgressBar=(0,emotion_react_browser_esm.F4)({"0%":{left:"-50%"},"100%":{left:"100%"}}),Track=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e15u147w2"})("position:relative;overflow:hidden;width:100%;max-width:160px;height:",config_values.Z.borderWidthFocus,";background-color:var(\n\t\t--wp-components-color-gray-300,\n\t\t",colors_values.D.gray[300],"\n\t);border-radius:",config_values.Z.radiusBlockUi,";"),Indicator=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e15u147w1"})("display:inline-block;position:absolute;top:0;height:100%;border-radius:",config_values.Z.radiusBlockUi,";background-color:",colors_values.D.theme.accent,";",(({isIndeterminate:isIndeterminate,value:value})=>isIndeterminate?(0,emotion_react_browser_esm.iv)({animationDuration:"1.5s",animationTimingFunction:"ease-in-out",animationIterationCount:"infinite",animationName:animateProgressBar,width:"50%"},"",""):(0,emotion_react_browser_esm.iv)({width:`${value}%`,transition:"width 0.4s ease-in-out"},"","")),";"),ProgressElement=(0,emotion_styled_base_browser_esm.Z)("progress",{target:"e15u147w0"})({name:"11fb690",styles:"position:absolute;top:0;left:0;opacity:0;width:100%;height:100%"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedProgressBar(props,ref){const{className:className,value:value,...progressProps}=props,isIndeterminate=!Number.isFinite(value);return(0,jsx_runtime.jsxs)(Track,{className:className,children:[(0,jsx_runtime.jsx)(Indicator,{isIndeterminate:isIndeterminate,value:value}),(0,jsx_runtime.jsx)(ProgressElement,{max:100,value:value,"aria-label":(0,build_module.__)("Loading …"),ref:ref,...progressProps})]})}UnforwardedProgressBar.displayName="UnforwardedProgressBar";const ProgressBar=(0,react.forwardRef)(UnforwardedProgressBar);try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{value:{defaultValue:null,description:"Value of the progress bar.",name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"A CSS class to apply to the progress bar wrapper (track) element.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/progress-bar/index.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"packages/components/src/progress-bar/index.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}try{progressbar.displayName="progressbar",progressbar.__docgenInfo={description:"",displayName:"progressbar",props:{value:{defaultValue:null,description:"Value of the progress bar.",name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"A CSS class to apply to the progress bar wrapper (track) element.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/progress-bar/index.tsx#progressbar"]={docgenInfo:progressbar.__docgenInfo,name:"progressbar",path:"packages/components/src/progress-bar/index.tsx#progressbar"})}catch(__react_docgen_typescript_loader_error){}var index_story={component:ProgressBar,title:"Components (Experimental)/ProgressBar",argTypes:{value:{control:{type:"number",min:0,max:100,step:1}}},parameters:{sourceLink:"packages/components/src/progress-bar",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}};const Template=({...args})=>(0,jsx_runtime.jsx)(ProgressBar,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  return <ProgressBar {...args} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);