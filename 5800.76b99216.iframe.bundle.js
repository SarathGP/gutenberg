"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[5800],{"./packages/components/build-module/unit-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return unit_control}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),unit_control_styles=__webpack_require__("./packages/components/build-module/unit-control/styles/unit-control-styles.js"),utils=__webpack_require__("./packages/components/build-module/unit-control/utils.js");var unit_select_control=(0,react.forwardRef)((function UnitSelectControl({className:className,isUnitSelectTabbable:isTabbable=!0,onChange:onChange,size:size="default",unit:unit="px",units:units=utils.Ui,...props},ref){if(!(0,utils.wW)(units)||1===units?.length)return(0,react.createElement)(unit_control_styles.Vh,{className:"components-unit-control__unit-label",selectSize:size},unit);const classes=classnames_default()("components-unit-control__select",className);return(0,react.createElement)(unit_control_styles.mY,{ref:ref,className:classes,onChange:event=>{const{value:unitValue}=event.target,data=units.find((option=>option.value===unitValue));onChange?.(unitValue,{event:event,data:data})},selectSize:size,tabIndex:isTabbable?void 0:-1,value:unit,...props},units.map((option=>(0,react.createElement)("option",{value:option.value,key:option.value},option.label))))})),use_controlled_state=__webpack_require__("./packages/components/build-module/utils/hooks/use-controlled-state.js"),strings=__webpack_require__("./packages/components/build-module/utils/strings.js");var unit_control=(0,react.forwardRef)((function UnforwardedUnitControl(unitControlProps,forwardedRef){const{__unstableStateReducer:__unstableStateReducer,autoComplete:autoComplete="off",children:children,className:className,disabled:disabled=!1,disableUnits:disableUnits=!1,isPressEnterToChange:isPressEnterToChange=!1,isResetValueOnUnitChange:isResetValueOnUnitChange=!1,isUnitSelectTabbable:isUnitSelectTabbable=!0,label:label,onChange:onChangeProp,onUnitChange:onUnitChange,size:size="default",unit:unitProp,units:unitsProp=utils.Ui,value:valueProp,onFocus:onFocusProp,...props}=unitControlProps;"unit"in unitControlProps&&(0,build_module.Z)("UnitControl unit prop",{since:"5.6",hint:"The unit should be provided within the `value` prop.",version:"6.2"});const nonNullValueProp=null!=valueProp?valueProp:void 0,[units,reFirstCharacterOfUnits]=(0,react.useMemo)((()=>{const list=(0,utils.e_)(nonNullValueProp,unitProp,unitsProp),[{value:firstUnitValue=""}={},...rest]=list,firstCharacters=rest.reduce(((carry,{value:value})=>{const first=(0,strings.h)(value?.substring(0,1)||"");return carry.includes(first)?carry:`${carry}|${first}`}),(0,strings.h)(firstUnitValue.substring(0,1)));return[list,new RegExp(`^(?:${firstCharacters})$`,"i")]}),[nonNullValueProp,unitProp,unitsProp]),[parsedQuantity,parsedUnit]=(0,utils.hy)(nonNullValueProp,unitProp,units),[unit,setUnit]=(0,use_controlled_state.Z)(1===units.length?units[0].value:unitProp,{initial:parsedUnit,fallback:""});(0,react.useEffect)((()=>{void 0!==parsedUnit&&setUnit(parsedUnit)}),[parsedUnit,setUnit]);const classes=classnames_default()("components-unit-control","components-unit-control-wrapper",className);let handleOnKeyDown;!disableUnits&&isUnitSelectTabbable&&units.length&&(handleOnKeyDown=event=>{props.onKeyDown?.(event),!event.metaKey&&reFirstCharacterOfUnits.test(event.key)&&refInputSuffix.current?.focus()});const refInputSuffix=(0,react.useRef)(null),inputSuffix=disableUnits?null:(0,react.createElement)(unit_select_control,{ref:refInputSuffix,"aria-label":(0,i18n_build_module.__)("Select unit"),disabled:disabled,isUnitSelectTabbable:isUnitSelectTabbable,onChange:(nextUnitValue,changeProps)=>{const{data:data}=changeProps;let nextValue=`${null!=parsedQuantity?parsedQuantity:""}${nextUnitValue}`;isResetValueOnUnitChange&&void 0!==data?.default&&(nextValue=`${data.default}${nextUnitValue}`),onChangeProp?.(nextValue,changeProps),onUnitChange?.(nextUnitValue,changeProps),setUnit(nextUnitValue)},size:size,unit:unit,units:units,onFocus:onFocusProp,onBlur:unitControlProps.onBlur});let step=props.step;if(!step&&units){var _activeUnit$step;const activeUnit=units.find((option=>option.value===unit));step=null!==(_activeUnit$step=activeUnit?.step)&&void 0!==_activeUnit$step?_activeUnit$step:1}return(0,react.createElement)(unit_control_styles.Ke,{...props,autoComplete:autoComplete,className:classes,disabled:disabled,spinControls:"none",isPressEnterToChange:isPressEnterToChange,label:label,onKeyDown:handleOnKeyDown,onChange:(nextQuantityValue,changeProps)=>{if(""===nextQuantityValue||null==nextQuantityValue)return void onChangeProp?.("",changeProps);const onChangeValue=(0,utils.Gl)(nextQuantityValue,units,parsedQuantity,unit).join("");onChangeProp?.(onChangeValue,changeProps)},ref:forwardedRef,size:size,suffix:inputSuffix,type:isPressEnterToChange?"text":"number",value:null!=parsedQuantity?parsedQuantity:"",step:step,onFocus:onFocusProp,__unstableStateReducer:__unstableStateReducer})}))},"./packages/components/build-module/unit-control/styles/unit-control-styles.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ke:function(){return ValueInput},Vh:function(){return UnitLabel},mY:function(){return UnitSelect}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/utils/rtl.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/utils/config-values.js"),_number_control__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/number-control/index.js"),_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js"),_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/ui/utils/space.js");const ValueInput=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_number_control__WEBPACK_IMPORTED_MODULE_1__.Z,{target:"e1bagdl32"})("&&&{input{display:block;width:100%;}",_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_2__.Kg,"{transition:box-shadow 0.1s linear;}}"),baseUnitLabelStyles=({selectSize:selectSize})=>{const sizes={default:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("box-sizing:border-box;padding:2px 1px;width:20px;color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[800],";font-size:8px;line-height:1;letter-spacing:-0.5px;text-transform:uppercase;text-align-last:center;","","",""),large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("box-sizing:border-box;min-width:24px;max-width:48px;height:24px;margin-inline-end:",(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2),";padding:",(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(1),";color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.theme.accent,";font-size:13px;line-height:1;text-align-last:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;","","","")};return"__unstable-large"===selectSize?sizes.large:sizes.default},UnitLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1bagdl31"})("&&&{pointer-events:none;",baseUnitLabelStyles,";color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[900],";}"),UnitSelect=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("select",{target:"e1bagdl30"})("&&&{appearance:none;background:transparent;border-radius:2px;border:none;display:block;outline:none;margin:0;min-height:auto;font-family:inherit;",baseUnitLabelStyles,";",(({selectSize:selectSize="default"})=>{const sizes={default:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("height:100%;border:1px solid transparent;transition:box-shadow 0.1s linear,border 0.1s linear;",(0,_utils__WEBPACK_IMPORTED_MODULE_6__.b)({borderTopLeftRadius:0,borderBottomLeftRadius:0})()," &:not(:disabled):hover{background-color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[100],";}&:focus{border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";box-shadow:inset 0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline-offset:0;outline:2px solid transparent;z-index:1;}","","",""),large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("display:flex;justify-content:center;align-items:center;&:hover{color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";box-shadow:inset 0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline:",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth," solid transparent;}&:focus{box-shadow:0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidthFocus+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline:",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidthFocus," solid transparent;}","","","")};return"__unstable-large"===selectSize?sizes.large:sizes.default}),";&:not( :disabled ){cursor:pointer;}}")},"./packages/components/build-module/unit-control/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Gl:function(){return getValidParsedQuantityAndUnit},Ui:function(){return CSS_UNITS},YX:function(){return parseQuantityAndUnitFromRawValue},e_:function(){return getUnitsWithCurrentUnit},hy:function(){return getParsedQuantityAndUnit},nj:function(){return useCustomUnits},wW:function(){return hasUnits}});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const isWeb="web"===__webpack_require__("./packages/element/build-module/platform.js").Z.OS,allUnits={px:{value:"px",label:isWeb?"px":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pixels (px)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pixels (px)"),step:1},"%":{value:"%",label:isWeb?"%":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Percentage (%)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Percent (%)"),step:.1},em:{value:"em",label:isWeb?"em":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Relative to parent font size (em)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("ems","Relative to parent font size (em)"),step:.01},rem:{value:"rem",label:isWeb?"rem":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Relative to root font size (rem)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("rems","Relative to root font size (rem)"),step:.01},vw:{value:"vw",label:isWeb?"vw":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport width (vw)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport width (vw)"),step:.1},vh:{value:"vh",label:isWeb?"vh":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport height (vh)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport height (vh)"),step:.1},vmin:{value:"vmin",label:isWeb?"vmin":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest dimension (vmin)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest dimension (vmin)"),step:.1},vmax:{value:"vmax",label:isWeb?"vmax":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport largest dimension (vmax)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport largest dimension (vmax)"),step:.1},ch:{value:"ch",label:isWeb?"ch":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of the zero (0) character (ch)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of the zero (0) character (ch)"),step:.01},ex:{value:"ex",label:isWeb?"ex":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("x-height of the font (ex)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("x-height of the font (ex)"),step:.01},cm:{value:"cm",label:isWeb?"cm":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Centimeters (cm)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Centimeters (cm)"),step:.001},mm:{value:"mm",label:isWeb?"mm":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Millimeters (mm)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Millimeters (mm)"),step:.1},in:{value:"in",label:isWeb?"in":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inches (in)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inches (in)"),step:.001},pc:{value:"pc",label:isWeb?"pc":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Picas (pc)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Picas (pc)"),step:1},pt:{value:"pt",label:isWeb?"pt":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Points (pt)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Points (pt)"),step:1}},ALL_CSS_UNITS=Object.values(allUnits),CSS_UNITS=[allUnits.px,allUnits["%"],allUnits.em,allUnits.rem,allUnits.vw,allUnits.vh],DEFAULT_UNIT=allUnits.px;function getParsedQuantityAndUnit(rawValue,fallbackUnit,allowedUnits){return parseQuantityAndUnitFromRawValue(fallbackUnit?`${null!=rawValue?rawValue:""}${fallbackUnit}`:rawValue,allowedUnits)}function hasUnits(units){return Array.isArray(units)&&!!units.length}function parseQuantityAndUnitFromRawValue(rawValue,allowedUnits=ALL_CSS_UNITS){let trimmedValue,quantityToReturn;if(void 0!==rawValue||null===rawValue){trimmedValue=`${rawValue}`.trim();const parsedQuantity=parseFloat(trimmedValue);quantityToReturn=isFinite(parsedQuantity)?parsedQuantity:void 0}const unitMatch=trimmedValue?.match(/[\d.\-\+]*\s*(.*)/),matchedUnit=unitMatch?.[1]?.toLowerCase();let unitToReturn;if(hasUnits(allowedUnits)){const match=allowedUnits.find((item=>item.value===matchedUnit));unitToReturn=match?.value}else unitToReturn=DEFAULT_UNIT.value;return[quantityToReturn,unitToReturn]}function getValidParsedQuantityAndUnit(rawValue,allowedUnits,fallbackQuantity,fallbackUnit){const[parsedQuantity,parsedUnit]=parseQuantityAndUnitFromRawValue(rawValue,allowedUnits),quantityToReturn=null!=parsedQuantity?parsedQuantity:fallbackQuantity;let unitToReturn=parsedUnit||fallbackUnit;return!unitToReturn&&hasUnits(allowedUnits)&&(unitToReturn=allowedUnits[0].value),[quantityToReturn,unitToReturn]}const useCustomUnits=({units:units=ALL_CSS_UNITS,availableUnits:availableUnits=[],defaultValues:defaultValues})=>{const customUnitsToReturn=function filterUnitsWithSettings(allowedUnitValues=[],availableUnits){return Array.isArray(availableUnits)?availableUnits.filter((unit=>allowedUnitValues.includes(unit.value))):[]}(availableUnits,units);return defaultValues&&customUnitsToReturn.forEach(((unit,i)=>{if(defaultValues[unit.value]){const[parsedDefaultValue]=parseQuantityAndUnitFromRawValue(defaultValues[unit.value]);customUnitsToReturn[i].default=parsedDefaultValue}})),customUnitsToReturn};function getUnitsWithCurrentUnit(rawValue,legacyUnit,units=ALL_CSS_UNITS){const unitsToReturn=Array.isArray(units)?[...units]:[],[,currentUnit]=getParsedQuantityAndUnit(rawValue,legacyUnit,ALL_CSS_UNITS);return currentUnit&&!unitsToReturn.some((unit=>unit.value===currentUnit))&&allUnits[currentUnit]&&unitsToReturn.unshift(allUnits[currentUnit]),unitsToReturn}},"./packages/components/build-module/utils/hooks/use-controlled-state.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_values__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/utils/values.js");const defaultOptions={initial:void 0,fallback:""};__webpack_exports__.Z=function useControlledState(currentState,options=defaultOptions){const{initial:initial,fallback:fallback}={...defaultOptions,...options},[internalState,setInternalState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(currentState),hasCurrentState=(0,_values__WEBPACK_IMPORTED_MODULE_1__.Jf)(currentState);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{hasCurrentState&&internalState&&setInternalState(void 0)}),[hasCurrentState,internalState]),[(0,_values__WEBPACK_IMPORTED_MODULE_1__.Me)([currentState,internalState,initial],fallback),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextState=>{hasCurrentState||setInternalState(nextState)}),[hasCurrentState])]}},"./packages/components/build-module/utils/strings.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:function(){return normalizeTextString},h:function(){return escapeRegExp}});var remove_accents__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/remove-accents/index.js"),remove_accents__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);const ALL_UNICODE_DASH_CHARACTERS=new RegExp(`[${["-","~","­","֊","־","᐀","᠆","‐","‑","‒","–","—","―","⁓","⁻","₋","−","⸗","⸺","⸻","〜","〰","゠","︱","︲","﹘","﹣","－"].join("")}]`,"g"),normalizeTextString=value=>remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(value).toLocaleLowerCase().replace(ALL_UNICODE_DASH_CHARACTERS,"-");function escapeRegExp(string){return string.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&")}},"./packages/element/build-module/platform.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={OS:"web",select:spec=>"web"in spec?spec.web:spec.default,isWeb:!0}}}]);