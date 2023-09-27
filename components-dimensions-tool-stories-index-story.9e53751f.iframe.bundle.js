(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[983],{"./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return AspectRatioTool}});var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/select-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_ASPECT_RATIO_OPTIONS=[{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Original","Aspect ratio option for dimensions control"),value:"auto"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Square - 1:1","Aspect ratio option for dimensions control"),value:"1"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Standard - 4:3","Aspect ratio option for dimensions control"),value:"4/3"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Portrait - 3:4","Aspect ratio option for dimensions control"),value:"3/4"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Classic - 3:2","Aspect ratio option for dimensions control"),value:"3/2"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Classic Portrait - 2:3","Aspect ratio option for dimensions control"),value:"2/3"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Wide - 16:9","Aspect ratio option for dimensions control"),value:"16/9"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Tall - 9:16","Aspect ratio option for dimensions control"),value:"9/16"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Custom","Aspect ratio option for dimensions control"),value:"custom",disabled:!0,hidden:!0}];function AspectRatioTool({panelId:panelId,value:value,onChange:onChange=(()=>{}),options:options=DEFAULT_ASPECT_RATIO_OPTIONS,defaultValue:defaultValue=DEFAULT_ASPECT_RATIO_OPTIONS[0].value,isShownByDefault:isShownByDefault=!0}){const displayValue=null!=value?value:"auto";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Z,{hasValue:()=>displayValue!==defaultValue,label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),onDeselect:()=>onChange(void 0),isShownByDefault:isShownByDefault,panelId:panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),value:displayValue,options:options,onChange:onChange,size:"__unstable-large",__nextHasNoMarginBottom:!0})})}AspectRatioTool.displayName="AspectRatioTool",AspectRatioTool.__docgenInfo={description:"@typedef {Object} AspectRatioToolProps\n@property {string}                       [panelId]          ID of the panel this tool is associated with.\n@property {string}                       [value]            Current aspect ratio value.\n@property {AspectRatioToolPropsOnChange} [onChange]         Callback to update the aspect ratio value.\n@property {SelectControlProps[]}         [options]          Aspect ratio options.\n@property {string}                       [defaultValue]     Default aspect ratio value.\n@property {boolean}                      [isShownByDefault] Whether the tool is shown by default.",methods:[],displayName:"AspectRatioTool",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},options:{defaultValue:{value:"[\n\t{\n\t\tlabel: _x( 'Original', 'Aspect ratio option for dimensions control' ),\n\t\tvalue: 'auto',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Square - 1:1',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '1',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Standard - 4:3',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '4/3',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Portrait - 3:4',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '3/4',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Classic - 3:2',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '3/2',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Classic Portrait - 2:3',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '2/3',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Wide - 16:9',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '16/9',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Tall - 9:16',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '9/16',\n\t},\n\t{\n\t\tlabel: _x( 'Custom', 'Aspect ratio option for dimensions control' ),\n\t\tvalue: 'custom',\n\t\tdisabled: true,\n\t\thidden: true,\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_ASPECT_RATIO_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/block-editor/src/components/dimensions-tool/scale-tool.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ScaleTool}});var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_SCALE_OPTIONS=[{value:"fill",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Fill","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by stretching the content.")},{value:"contain",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Contain","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit the content to the space without clipping.")},{value:"cover",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Cover","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by clipping what doesn't fit.")},{value:"none",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("None","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.")},{value:"scale-down",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Scale down","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.")}];function ScaleTool({panelId:panelId,value:value,onChange:onChange,options:options=DEFAULT_SCALE_OPTIONS,defaultValue:defaultValue=DEFAULT_SCALE_OPTIONS[0].value,isShownByDefault:isShownByDefault=!0}){const displayValue=null!=value?value:"fill",scaleHelp=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>options.reduce(((acc,option)=>(acc[option.value]=option.help,acc)),{})),[options]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isShownByDefault:isShownByDefault,hasValue:()=>displayValue!==defaultValue,onDeselect:()=>onChange(defaultValue),panelId:panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isBlock:!0,help:scaleHelp[displayValue],value:displayValue,onChange:onChange,__nextHasNoMarginBottom:!0,children:options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Z,{...option},option.value)))})})}ScaleTool.displayName="ScaleTool",ScaleTool.__docgenInfo={description:"A tool to select the CSS object-fit property for the image.\n\n@param {ScaleToolProps} props\n\n@return {import('@wordpress/element').WPElement} The scale tool.",methods:[],displayName:"ScaleTool",props:{options:{defaultValue:{value:"[\n\t{\n\t\tvalue: 'fill',\n\t\tlabel: _x( 'Fill', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fill the space by stretching the content.' ),\n\t},\n\t{\n\t\tvalue: 'contain',\n\t\tlabel: _x( 'Contain', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fit the content to the space without clipping.' ),\n\t},\n\t{\n\t\tvalue: 'cover',\n\t\tlabel: _x( 'Cover', 'Scale option for dimensions control' ),\n\t\thelp: __( \"Fill the space by clipping what doesn't fit.\" ),\n\t},\n\t{\n\t\tvalue: 'none',\n\t\tlabel: _x( 'None', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.'\n\t\t),\n\t},\n\t{\n\t\tvalue: 'scale-down',\n\t\tlabel: _x( 'Scale down', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.'\n\t\t),\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_SCALE_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/block-editor/src/components/dimensions-tool/width-height-tool.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return WidthHeightTool}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/unit-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SingleColumnToolsPanelItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{target:"ef8pe3d0"})({name:"957xgf",styles:"grid-column:span 1"});function WidthHeightTool({panelId:panelId,value:value={},onChange:onChange=(()=>{}),units:units,isShownByDefault:isShownByDefault=!0}){var _value$width,_value$height;const width="auto"===value.width?"":null!==(_value$width=value.width)&&void 0!==_value$width?_value$width:"",height="auto"===value.height?"":null!==(_value$height=value.height)&&void 0!==_value$height?_value$height:"",onDimensionChange=dimension=>nextDimension=>{const nextValue={...value};nextDimension?nextValue[dimension]=nextDimension:delete nextValue[dimension],onChange(nextValue)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),isShownByDefault:isShownByDefault,hasValue:()=>""!==width,onDeselect:onDimensionChange("width"),panelId:panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units:units,min:0,value:width,onChange:onDimensionChange("width"),size:"__unstable-large"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),isShownByDefault:isShownByDefault,hasValue:()=>""!==height,onDeselect:onDimensionChange("height"),panelId:panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units:units,min:0,value:height,onChange:onDimensionChange("height"),size:"__unstable-large"})})]})}WidthHeightTool.__docgenInfo={description:"Component that renders controls to edit the dimensions of an image or container.\n\n@param {WidthHeightToolProps} props The component props.\n\n@return {import('@wordpress/element').WPElement} The width and height tool.",methods:[],displayName:"WidthHeightTool",props:{value:{defaultValue:{value:"{}",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/components/build-module/panel/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return panel}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var panel_header=function PanelHeader({label:label,children:children}){return(0,react.createElement)("div",{className:"components-panel__header"},label&&(0,react.createElement)("h2",null,label),children)};var panel=(0,react.forwardRef)((function UnforwardedPanel({header:header,className:className,children:children},ref){const classNames=classnames_default()(className,"components-panel");return(0,react.createElement)("div",{className:classNames,ref:ref},header&&(0,react.createElement)(panel_header,{label:header}),children)}))},"./packages/components/build-module/select-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Y:function(){return SelectControl}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/base-control/index.js"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/input-control/input-base.js"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/select-control/styles/select-control-styles.js"),_chevron_down__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/select-control/chevron-down.js");const noop=()=>{};const SelectControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedSelectControl(props,ref){const{className:className,disabled:disabled=!1,help:help,hideLabelFromVision:hideLabelFromVision,id:idProp,label:label,multiple:multiple=!1,onBlur:onBlur=noop,onChange:onChange,onFocus:onFocus=noop,options:options=[],size:size="default",value:valueProp,labelPosition:labelPosition="top",children:children,prefix:prefix,suffix:suffix,__next36pxDefaultSize:__next36pxDefaultSize=!1,__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,...restProps}=props,[isFocused,setIsFocused]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.Z)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!options?.length&&!children)return null;const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-select-control",className);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_base_control__WEBPACK_IMPORTED_MODULE_3__.ZP,{help:help,id:id,__nextHasNoMarginBottom:__nextHasNoMarginBottom},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_4__.Z,{className:classes,disabled:disabled,hideLabelFromVision:hideLabelFromVision,id:id,isFocused:isFocused,label:label,size:size,suffix:suffix||!multiple&&(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_chevron_down__WEBPACK_IMPORTED_MODULE_5__.Z,null),prefix:prefix,labelPosition:labelPosition,__next36pxDefaultSize:__next36pxDefaultSize},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_6__.Ph,{...restProps,__next36pxDefaultSize:__next36pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled:disabled,id:id,multiple:multiple,onBlur:event=>{onBlur(event),setIsFocused(!1)},onChange:event=>{if(props.multiple){const newValues=Array.from(event.target.options).filter((({selected:selected})=>selected)).map((({value:value})=>value));props.onChange?.(newValues,{event:event})}else props.onChange?.(event.target.value,{event:event})},onFocus:event=>{onFocus(event),setIsFocused(!0)},ref:ref,selectSize:size,value:valueProp},children||options.map(((option,index)=>{const key=option.id||`${option.label}-${option.value}-${index}`;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("option",{key:key,value:option.value,disabled:option.disabled,hidden:option.hidden},option.label)})))))}));__webpack_exports__.Z=SelectControl},"./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js");const ToggleGroupControlOption=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function UnforwardedToggleGroupControlOption(props,ref){const{label:label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,"aria-label":optionLabel,ref:ref},label)}));__webpack_exports__.Z=ToggleGroupControlOption},"./node_modules/remove-accents/index.js":function(module){var characterMap={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ả":"A","Ạ":"A","Ẩ":"A","Ẫ":"A","Ậ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ẻ":"E","Ẽ":"E","Ẹ":"E","Ể":"E","Ễ":"E","Ệ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ỉ":"I","Ị":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ỏ":"O","Ọ":"O","Ổ":"O","Ỗ":"O","Ộ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ớ":"O","Ợ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ủ":"U","Ụ":"U","Ử":"U","Ữ":"U","Ự":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ả":"a","ạ":"a","ẩ":"a","ẫ":"a","ậ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ẻ":"e","ẽ":"e","ẹ":"e","ể":"e","ễ":"e","ệ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ỉ":"i","ị":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ỏ":"o","ọ":"o","ổ":"o","ỗ":"o","ộ":"o","ờ":"o","ở":"o","ỡ":"o","ớ":"o","ợ":"o","ù":"u","ú":"u","û":"u","ü":"u","ủ":"u","ụ":"u","ử":"u","ữ":"u","ự":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z","й":"и","Й":"И","ё":"е","Ё":"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents},"./packages/block-editor/src/components/dimensions-tool/stories/index.story.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_story}});var react=__webpack_require__("./node_modules/react/index.js"),panel=__webpack_require__("./packages/components/build-module/panel/index.js"),component=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel/component.js"),aspect_ratio_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js"),scale_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/scale-tool.js"),width_height_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/width-height-tool.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DimensionsTool({panelId:panelId,value:value={},onChange:onChange=(()=>{}),aspectRatioOptions:aspectRatioOptions,defaultAspectRatio:defaultAspectRatio="auto",scaleOptions:scaleOptions,defaultScale:defaultScale="fill",unitsOptions:unitsOptions}){const width=void 0===value.width||"auto"===value.width?null:value.width,height=void 0===value.height||"auto"===value.height?null:value.height,aspectRatio=void 0===value.aspectRatio||"auto"===value.aspectRatio?null:value.aspectRatio,scale=void 0===value.scale||"fill"===value.scale?null:value.scale,[lastScale,setLastScale]=(0,react.useState)(scale),[lastAspectRatio,setLastAspectRatio]=(0,react.useState)(aspectRatio),aspectRatioValue=width&&height?"custom":lastAspectRatio,showScaleControl=aspectRatio||width&&height;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(aspect_ratio_tool.Z,{panelId:panelId,options:aspectRatioOptions,defaultValue:defaultAspectRatio,value:aspectRatioValue,onChange:nextAspectRatio=>{const nextValue={...value};setLastAspectRatio(nextAspectRatio="auto"===nextAspectRatio?null:nextAspectRatio),nextAspectRatio?nextValue.aspectRatio=nextAspectRatio:delete nextValue.aspectRatio,nextAspectRatio?lastScale?nextValue.scale=lastScale:(nextValue.scale=defaultScale,setLastScale(defaultScale)):delete nextValue.scale,"custom"!==nextAspectRatio&&width&&height&&delete nextValue.height,onChange(nextValue)}}),showScaleControl&&(0,jsx_runtime.jsx)(scale_tool.Z,{panelId:panelId,options:scaleOptions,defaultValue:defaultScale,value:lastScale,onChange:nextScale=>{const nextValue={...value};setLastScale(nextScale="fill"===nextScale?null:nextScale),nextScale?nextValue.scale=nextScale:delete nextValue.scale,onChange(nextValue)}}),(0,jsx_runtime.jsx)(width_height_tool.Z,{panelId:panelId,units:unitsOptions,value:{width:width,height:height},onChange:({width:nextWidth,height:nextHeight})=>{const nextValue={...value};nextHeight="auto"===nextHeight?null:nextHeight,(nextWidth="auto"===nextWidth?null:nextWidth)?nextValue.width=nextWidth:delete nextValue.width,nextHeight?nextValue.height=nextHeight:delete nextValue.height,nextWidth&&nextHeight?delete nextValue.aspectRatio:lastAspectRatio&&(nextValue.aspectRatio=lastAspectRatio),lastAspectRatio||!!nextWidth==!!nextHeight?lastScale?nextValue.scale=lastScale:(nextValue.scale=defaultScale,setLastScale(defaultScale)):delete nextValue.scale,onChange(nextValue)}})]})}DimensionsTool.__docgenInfo={description:"Component that renders controls to edit the dimensions of an image or container.\n\n@param {DimensionsControlsProps} props The component props.\n\n@return {WPElement} The dimensions controls.",methods:[],displayName:"DimensionsTool",props:{value:{defaultValue:{value:"{}",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},defaultAspectRatio:{defaultValue:{value:"'auto'",computed:!1},required:!1},defaultScale:{defaultValue:{value:"'fill'",computed:!1},required:!1}}};var dimensions_tool=DimensionsTool,index_story={title:"BlockEditor (Private APIs)/DimensionsTool",component:dimensions_tool,argTypes:{panelId:{control:{type:null}},onChange:{action:"changed"}},parameters:{sourceLink:"packages/block-editor/src/components/dimensions-tool"}};const EMPTY_OBJECT={},Default=({panelId:panelId,onChange:onChange,...props})=>{const[value,setValue]=(0,react.useState)(EMPTY_OBJECT);return(0,jsx_runtime.jsx)(panel.Z,{children:(0,jsx_runtime.jsx)(component.Z,{label:"Dimensions",panelId:panelId,resetAll:()=>{setValue(EMPTY_OBJECT),onChange(EMPTY_OBJECT)},children:(0,jsx_runtime.jsx)(dimensions_tool,{panelId:panelId,onChange:nextValue=>{setValue(nextValue),onChange(nextValue)},value:value,...props})})})};Default.displayName="Default",Default.args={panelId:"panel-id"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  panelId,\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState(EMPTY_OBJECT);\n  const resetAll = () => {\n    setValue(EMPTY_OBJECT);\n    onChange(EMPTY_OBJECT);\n  };\n  return <Panel>\n            <ToolsPanel label="Dimensions" panelId={panelId} resetAll={resetAll}>\n                <DimensionsTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        onChange(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"}}}]);