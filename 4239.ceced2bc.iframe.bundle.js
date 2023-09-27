(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4239],{"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var util=__webpack_require__("./node_modules/dom-scroll-into-view/lib/util.js");module.exports=function scrollIntoView(elem,container,config){config=config||{},9===container.nodeType&&(container=util.getWindow(container));var allowHorizontalScroll=config.allowHorizontalScroll,onlyScrollIfNeeded=config.onlyScrollIfNeeded,alignWithTop=config.alignWithTop,alignWithLeft=config.alignWithLeft,offsetTop=config.offsetTop||0,offsetLeft=config.offsetLeft||0,offsetBottom=config.offsetBottom||0,offsetRight=config.offsetRight||0;allowHorizontalScroll=void 0===allowHorizontalScroll||allowHorizontalScroll;var isWin=util.isWindow(container),isFramed=!(!isWin||!container.frameElement),elemOffset=util.offset(elem),eh=util.outerHeight(elem),ew=util.outerWidth(elem),containerOffset=void 0,ch=void 0,cw=void 0,containerScroll=void 0,diffTop=void 0,diffBottom=void 0,win=void 0,winScroll=void 0,ww=void 0,wh=void 0;isFramed&&(container=container.document.scrollingElement||container.document.body),isWin||isFramed?(win=container,wh=util.height(win),ww=util.width(win),winScroll={left:util.scrollLeft(win),top:util.scrollTop(win)},diffTop={left:elemOffset.left-winScroll.left-offsetLeft,top:elemOffset.top-winScroll.top-offsetTop},diffBottom={left:elemOffset.left+ew-(winScroll.left+ww)+offsetRight,top:elemOffset.top+eh-(winScroll.top+wh)+offsetBottom},containerScroll=winScroll):(containerOffset=util.offset(container),ch=container.clientHeight,cw=container.clientWidth,containerScroll={left:container.scrollLeft,top:container.scrollTop},diffTop={left:elemOffset.left-(containerOffset.left+(parseFloat(util.css(container,"borderLeftWidth"))||0))-offsetLeft,top:elemOffset.top-(containerOffset.top+(parseFloat(util.css(container,"borderTopWidth"))||0))-offsetTop},diffBottom={left:elemOffset.left+ew-(containerOffset.left+cw+(parseFloat(util.css(container,"borderRightWidth"))||0))+offsetRight,top:elemOffset.top+eh-(containerOffset.top+ch+(parseFloat(util.css(container,"borderBottomWidth"))||0))+offsetBottom}),diffTop.top<0||diffBottom.top>0?!0===alignWithTop?util.scrollTop(container,containerScroll.top+diffTop.top):!1===alignWithTop?util.scrollTop(container,containerScroll.top+diffBottom.top):diffTop.top<0?util.scrollTop(container,containerScroll.top+diffTop.top):util.scrollTop(container,containerScroll.top+diffBottom.top):onlyScrollIfNeeded||((alignWithTop=void 0===alignWithTop||!!alignWithTop)?util.scrollTop(container,containerScroll.top+diffTop.top):util.scrollTop(container,containerScroll.top+diffBottom.top)),allowHorizontalScroll&&(diffTop.left<0||diffBottom.left>0?!0===alignWithLeft?util.scrollLeft(container,containerScroll.left+diffTop.left):!1===alignWithLeft?util.scrollLeft(container,containerScroll.left+diffBottom.left):diffTop.left<0?util.scrollLeft(container,containerScroll.left+diffTop.left):util.scrollLeft(container,containerScroll.left+diffBottom.left):onlyScrollIfNeeded||((alignWithLeft=void 0===alignWithLeft||!!alignWithLeft)?util.scrollLeft(container,containerScroll.left+diffTop.left):util.scrollLeft(container,containerScroll.left+diffBottom.left)))}},"./node_modules/dom-scroll-into-view/lib/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js")},"./node_modules/dom-scroll-into-view/lib/util.js":function(module){"use strict";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj};function getScroll(w,top){var ret=w["page"+(top?"Y":"X")+"Offset"],method="scroll"+(top?"Top":"Left");if("number"!=typeof ret){var d=w.document;"number"!=typeof(ret=d.documentElement[method])&&(ret=d.body[method])}return ret}function getScrollLeft(w){return getScroll(w)}function getScrollTop(w){return getScroll(w,!0)}function getOffset(el){var pos=function getClientPosition(elem){var box,x=void 0,y=void 0,doc=elem.ownerDocument,body=doc.body,docElem=doc&&doc.documentElement;return x=(box=elem.getBoundingClientRect()).left,y=box.top,{left:x-=docElem.clientLeft||body.clientLeft||0,top:y-=docElem.clientTop||body.clientTop||0}}(el),doc=el.ownerDocument,w=doc.defaultView||doc.parentWindow;return pos.left+=getScrollLeft(w),pos.top+=getScrollTop(w),pos}var _RE_NUM_NO_PX=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),RE_POS=/^(top|right|bottom|left)$/,LEFT="left";var getComputedStyleX=void 0;function each(arr,fn){for(var i=0;i<arr.length;i++)fn(arr[i])}function isBorderBoxFn(elem){return"border-box"===getComputedStyleX(elem,"boxSizing")}"undefined"!=typeof window&&(getComputedStyleX=window.getComputedStyle?function _getComputedStyle(elem,name,computedStyle_){var val="",d=elem.ownerDocument,computedStyle=computedStyle_||d.defaultView.getComputedStyle(elem,null);return computedStyle&&(val=computedStyle.getPropertyValue(name)||computedStyle[name]),val}:function _getComputedStyleIE(elem,name){var ret=elem.currentStyle&&elem.currentStyle[name];if(_RE_NUM_NO_PX.test(ret)&&!RE_POS.test(name)){var style=elem.style,left=style[LEFT],rsLeft=elem.runtimeStyle[LEFT];elem.runtimeStyle[LEFT]=elem.currentStyle[LEFT],style[LEFT]="fontSize"===name?"1em":ret||0,ret=style.pixelLeft+"px",style[LEFT]=left,elem.runtimeStyle[LEFT]=rsLeft}return""===ret?"auto":ret});var BOX_MODELS=["margin","border","padding"],CONTENT_INDEX=-1,PADDING_INDEX=2,BORDER_INDEX=1;function getPBMWidth(elem,props,which){var value=0,prop=void 0,j=void 0,i=void 0;for(j=0;j<props.length;j++)if(prop=props[j])for(i=0;i<which.length;i++){var cssProp=void 0;cssProp="border"===prop?prop+which[i]+"Width":prop+which[i],value+=parseFloat(getComputedStyleX(elem,cssProp))||0}return value}function isWindow(obj){return null!=obj&&obj==obj.window}var domUtils={};function getWH(elem,name,extra){if(isWindow(elem))return"width"===name?domUtils.viewportWidth(elem):domUtils.viewportHeight(elem);if(9===elem.nodeType)return"width"===name?domUtils.docWidth(elem):domUtils.docHeight(elem);var which="width"===name?["Left","Right"]:["Top","Bottom"],borderBoxValue="width"===name?elem.offsetWidth:elem.offsetHeight,isBorderBox=(getComputedStyleX(elem),isBorderBoxFn(elem)),cssBoxValue=0;(null==borderBoxValue||borderBoxValue<=0)&&(borderBoxValue=void 0,(null==(cssBoxValue=getComputedStyleX(elem,name))||Number(cssBoxValue)<0)&&(cssBoxValue=elem.style[name]||0),cssBoxValue=parseFloat(cssBoxValue)||0),void 0===extra&&(extra=isBorderBox?BORDER_INDEX:CONTENT_INDEX);var borderBoxValueOrIsBorderBox=void 0!==borderBoxValue||isBorderBox,val=borderBoxValue||cssBoxValue;if(extra===CONTENT_INDEX)return borderBoxValueOrIsBorderBox?val-getPBMWidth(elem,["border","padding"],which):cssBoxValue;if(borderBoxValueOrIsBorderBox){var padding=extra===PADDING_INDEX?-getPBMWidth(elem,["border"],which):getPBMWidth(elem,["margin"],which);return val+(extra===BORDER_INDEX?0:padding)}return cssBoxValue+getPBMWidth(elem,BOX_MODELS.slice(extra),which)}each(["Width","Height"],(function(name){domUtils["doc"+name]=function(refWin){var d=refWin.document;return Math.max(d.documentElement["scroll"+name],d.body["scroll"+name],domUtils["viewport"+name](d))},domUtils["viewport"+name]=function(win){var prop="client"+name,doc=win.document,body=doc.body,documentElementProp=doc.documentElement[prop];return"CSS1Compat"===doc.compatMode&&documentElementProp||body&&body[prop]||documentElementProp}}));var cssShow={position:"absolute",visibility:"hidden",display:"block"};function getWHIgnoreDisplay(elem){var val=void 0,args=arguments;return 0!==elem.offsetWidth?val=getWH.apply(void 0,args):function swap(elem,options,callback){var old={},style=elem.style,name=void 0;for(name in options)options.hasOwnProperty(name)&&(old[name]=style[name],style[name]=options[name]);for(name in callback.call(elem),options)options.hasOwnProperty(name)&&(style[name]=old[name])}(elem,cssShow,(function(){val=getWH.apply(void 0,args)})),val}function css(el,name,v){var value=v;if("object"!==(void 0===name?"undefined":_typeof(name)))return void 0!==value?("number"==typeof value&&(value+="px"),void(el.style[name]=value)):getComputedStyleX(el,name);for(var i in name)name.hasOwnProperty(i)&&css(el,i,name[i])}each(["width","height"],(function(name){var first=name.charAt(0).toUpperCase()+name.slice(1);domUtils["outer"+first]=function(el,includeMargin){return el&&getWHIgnoreDisplay(el,name,includeMargin?0:BORDER_INDEX)};var which="width"===name?["Left","Right"]:["Top","Bottom"];domUtils[name]=function(elem,val){if(void 0===val)return elem&&getWHIgnoreDisplay(elem,name,CONTENT_INDEX);if(elem){getComputedStyleX(elem);return isBorderBoxFn(elem)&&(val+=getPBMWidth(elem,["padding","border"],which)),css(elem,name,val)}}})),module.exports=_extends({getWindow:function getWindow(node){var doc=node.ownerDocument||node;return doc.defaultView||doc.parentWindow},offset:function offset(el,value){if(void 0===value)return getOffset(el);!function setOffset(elem,offset){"static"===css(elem,"position")&&(elem.style.position="relative");var old=getOffset(elem),ret={},current=void 0,key=void 0;for(key in offset)offset.hasOwnProperty(key)&&(current=parseFloat(css(elem,key))||0,ret[key]=current+offset[key]-old[key]);css(elem,ret)}(el,value)},isWindow:isWindow,each:each,css:css,clone:function clone(obj){var ret={};for(var i in obj)obj.hasOwnProperty(i)&&(ret[i]=obj[i]);if(obj.overflow)for(var i in obj)obj.hasOwnProperty(i)&&(ret.overflow[i]=obj.overflow[i]);return ret},scrollLeft:function scrollLeft(w,v){if(isWindow(w)){if(void 0===v)return getScrollLeft(w);window.scrollTo(v,getScrollTop(w))}else{if(void 0===v)return w.scrollLeft;w.scrollLeft=v}},scrollTop:function scrollTop(w,v){if(isWindow(w)){if(void 0===v)return getScrollTop(w);window.scrollTo(getScrollLeft(w),v)}else{if(void 0===v)return w.scrollTop;w.scrollTop=v}},viewportWidth:0,viewportHeight:0},domUtils)},"./node_modules/highlight-words-core/dist/index.js":function(module){module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape:autoEscape,caseSensitive:caseSensitive,sanitize:sanitize,searchWords:searchWords,textToHighlight:textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start:start,end:end,highlight:highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./node_modules/use-memo-one/dist/use-memo-one.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Pr:function(){return useMemoOne}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMemoOne(getResult,inputs){var initial=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return{inputs:inputs,result:getResult()}}))[0],committed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial),cache=Boolean(inputs&&committed.current.inputs&&function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(newInputs[i]!==lastInputs[i])return!1;return!0}(inputs,committed.current.inputs))?committed.current:{inputs:inputs,result:getResult()};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){committed.current=cache}),[cache]),cache.result}}}]);