"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6414],{"./packages/components/src/surface/hook.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return useSurface}});var react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const Surface=(0,emotion_react_browser_esm.iv)("background-color:",config_values.Z.surfaceColor,";color:",colors_values.D.gray[900],";position:relative;","");config_values.Z.surfaceBackgroundColor;function getBorders({borderBottom:borderBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop}){const borderStyle=`1px solid ${config_values.Z.surfaceBorderColor}`;return(0,emotion_react_browser_esm.iv)({borderBottom:borderBottom?borderStyle:void 0,borderLeft:borderLeft?borderStyle:void 0,borderRight:borderRight?borderStyle:void 0,borderTop:borderTop?borderStyle:void 0},"","")}const primary=(0,emotion_react_browser_esm.iv)("",""),secondary=(0,emotion_react_browser_esm.iv)("background:",config_values.Z.surfaceBackgroundTintColor,";",""),tertiary=(0,emotion_react_browser_esm.iv)("background:",config_values.Z.surfaceBackgroundTertiaryColor,";",""),customBackgroundSize=surfaceBackgroundSize=>[surfaceBackgroundSize,surfaceBackgroundSize].join(" "),dottedBackground1=surfaceBackgroundSizeDotted=>["90deg",[config_values.Z.surfaceBackgroundColor,surfaceBackgroundSizeDotted].join(" "),"transparent 1%"].join(","),dottedBackground2=surfaceBackgroundSizeDotted=>[[config_values.Z.surfaceBackgroundColor,surfaceBackgroundSizeDotted].join(" "),"transparent 1%"].join(","),getDotted=(surfaceBackgroundSize,surfaceBackgroundSizeDotted)=>(0,emotion_react_browser_esm.iv)("background:",(surfaceBackgroundSizeDotted=>[`linear-gradient( ${dottedBackground1(surfaceBackgroundSizeDotted)} ) center`,`linear-gradient( ${dottedBackground2(surfaceBackgroundSizeDotted)} ) center`,config_values.Z.surfaceBorderBoldColor].join(","))(surfaceBackgroundSizeDotted),";background-size:",customBackgroundSize(surfaceBackgroundSize),";",""),gridBackgroundCombined=[`linear-gradient( ${[`${config_values.Z.surfaceBorderSubtleColor} 1px`,"transparent 1px"].join(",")} )`,`linear-gradient( ${["90deg",`${config_values.Z.surfaceBorderSubtleColor} 1px`,"transparent 1px"].join(",")} )`].join(","),getVariant=(variant,surfaceBackgroundSize,surfaceBackgroundSizeDotted)=>{switch(variant){case"dotted":return getDotted(surfaceBackgroundSize,surfaceBackgroundSizeDotted);case"grid":return(surfaceBackgroundSize=>(0,emotion_react_browser_esm.iv)("background:",config_values.Z.surfaceBackgroundColor,";background-image:",gridBackgroundCombined,";background-size:",customBackgroundSize(surfaceBackgroundSize),";",""))(surfaceBackgroundSize);case"primary":return primary;case"secondary":return secondary;case"tertiary":return tertiary}};var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useSurface(props){const{backgroundSize:backgroundSize=12,borderBottom:borderBottom=!1,borderLeft:borderLeft=!1,borderRight:borderRight=!1,borderTop:borderTop=!1,className:className,variant:variant="primary",...otherProps}=(0,use_context_system.y)(props,"Surface"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>{const sx={borders:getBorders({borderBottom:borderBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop})};return cx(Surface,sx.borders,getVariant(variant,`${backgroundSize}px`,backgroundSize-1+"px"),className)}),[backgroundSize,borderBottom,borderLeft,borderRight,borderTop,className,cx,variant])}}}}]);