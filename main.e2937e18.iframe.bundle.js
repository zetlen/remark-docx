(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./playground.stories.tsx":"./stories/playground.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/playground.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MarkdownToDocx",(function(){return playground_stories_MarkdownToDocx}));__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/unified/lib/index.js"),remark_parse=__webpack_require__("./node_modules/remark-parse/index.js"),remark_gfm=__webpack_require__("./node_modules/remark-gfm/index.js"),remark_frontmatter=__webpack_require__("./node_modules/remark-frontmatter/index.js"),unist_util_visit=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/unist-util-visit/index.js")),build=(__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/docx/build/index.js"));function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DEFAULT_NUMBERINGS=[{level:0,format:build.LevelFormat.DECIMAL,text:"%1.",alignment:build.AlignmentType.START},{level:1,format:build.LevelFormat.DECIMAL,text:"%2.",alignment:build.AlignmentType.START,style:{paragraph:{indent:{start:Object(build.convertInchesToTwip)(.5)}}}},{level:2,format:build.LevelFormat.DECIMAL,text:"%3.",alignment:build.AlignmentType.START,style:{paragraph:{indent:{start:Object(build.convertInchesToTwip)(1)}}}},{level:3,format:build.LevelFormat.DECIMAL,text:"%4.",alignment:build.AlignmentType.START,style:{paragraph:{indent:{start:Object(build.convertInchesToTwip)(1.5)}}}},{level:4,format:build.LevelFormat.DECIMAL,text:"%5.",alignment:build.AlignmentType.START,style:{paragraph:{indent:{start:Object(build.convertInchesToTwip)(2)}}}},{level:5,format:build.LevelFormat.DECIMAL,text:"%6.",alignment:build.AlignmentType.START,style:{paragraph:{indent:{start:Object(build.convertInchesToTwip)(2.5)}}}}],error=function error(message){throw new Error(message)};function mdastToDocx(node,_ref,images){var output=_ref.output,title=_ref.title,subject=_ref.subject,creator=_ref.creator,keywords=_ref.keywords,description=_ref.description,lastModifiedBy=_ref.lastModifiedBy,revision=_ref.revision,styles=_ref.styles,background=_ref.background,nodes=convertNodes(node.children,{deco:{},images:images}),doc=new build.Document({title:title,subject:subject,creator:creator,keywords:keywords,description:description,lastModifiedBy:lastModifiedBy,revision:revision,styles:styles,background:background,sections:[{children:nodes}],numbering:{config:[{reference:"ordered",levels:DEFAULT_NUMBERINGS}]}});switch(null!=output?output:"buffer"){case"buffer":return build.Packer.toBuffer(doc);case"blob":return build.Packer.toBlob(doc);case"raw":return doc}}function convertNodes(nodes,ctx){var _step,results=[],_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(nodes);try{for(_iterator.s();!(_step=_iterator.n()).done;){var node=_step.value;switch(node.type){case"paragraph":results.push(buildParagraph(node,ctx));break;case"heading":results.push(buildHeading(node,ctx));break;case"thematicBreak":results.push(buildThematicBreak(node));break;case"blockquote":results.push.apply(results,_toConsumableArray(buildBlockquote(node,ctx)));break;case"list":results.push.apply(results,_toConsumableArray(buildList(node,ctx)));break;case"listItem":case"tableRow":case"tableCell":error("unreachable");break;case"table":results.push(buildTable(node,ctx));break;case"html":results.push(buildHtml(node));break;case"code":results.push(buildCode(node));break;case"yaml":case"toml":case"definition":case"footnoteDefinition":case"linkReference":case"imageReference":case"footnoteReference":break;case"text":case"inlineCode":results.push(buildText(node.value,ctx.deco));break;case"emphasis":case"strong":case"delete":var _Object$assign,type=node.type,children=node.children;results.push.apply(results,_toConsumableArray(convertNodes(children,Object.assign({},ctx,{deco:Object.assign({},ctx.deco,(_Object$assign={},_Object$assign[type]=!0,_Object$assign))}))));break;case"break":results.push(buildBreak(node));break;case"link":results.push(buildLink(node,ctx));break;case"image":results.push(buildImage(node,ctx.images));break;case"footnote":results.push(buildFootnote(node,ctx));break;case"math":results.push(buildMath(node));break;case"inlineMath":results.push(buildInlineMath(node));break;default:}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return results}function buildParagraph(_ref2,ctx){_ref2.type;var children=_ref2.children,list=ctx.list;return new build.Paragraph(Object.assign({children:convertNodes(children,ctx)},list&&(list.ordered?{numbering:{reference:"ordered",level:list.level}}:{bullet:{level:list.level}})))}function buildHeading(_ref3,ctx){_ref3.type;var heading,children=_ref3.children;switch(_ref3.depth){case 1:heading=build.HeadingLevel.TITLE;break;case 2:heading=build.HeadingLevel.HEADING_1;break;case 3:heading=build.HeadingLevel.HEADING_2;break;case 4:heading=build.HeadingLevel.HEADING_3;break;case 5:heading=build.HeadingLevel.HEADING_4;break;case 6:heading=build.HeadingLevel.HEADING_5}return new build.Paragraph({heading:heading,children:convertNodes(children,ctx)})}function buildThematicBreak(_ref4){_ref4.type;return new build.Paragraph({thematicBreak:!0})}function buildBlockquote(_ref5,ctx){_ref5.type;return convertNodes(_ref5.children,ctx)}function buildList(_ref6,ctx){_ref6.type;var children=_ref6.children,ordered=_ref6.ordered,list=(_ref6.start,_ref6.spread,{level:ctx.list?ctx.list.level+1:0,ordered:!!ordered});return children.reduce((function(acc,item){return acc.push.apply(acc,_toConsumableArray(function buildListItem(_ref7,ctx){_ref7.type;var children=_ref7.children;_ref7.checked,_ref7.spread;return convertNodes(children,ctx)}(item,Object.assign({},ctx,{list:list})))),acc}),[])}function buildTable(_ref8,ctx){_ref8.type;var children=_ref8.children,align=_ref8.align,cellAligns=null==align?void 0:align.map((function(a){switch(a){case"left":default:return build.AlignmentType.LEFT;case"right":return build.AlignmentType.RIGHT;case"center":return build.AlignmentType.CENTER}}));return new build.Table({rows:children.map((function(r){return function buildTableRow(_ref9,ctx,cellAligns){_ref9.type;var children=_ref9.children;return new build.TableRow({children:children.map((function(c,i){return function buildTableCell(_ref10,ctx,align){_ref10.type;var children=_ref10.children;return new build.TableCell({children:[new build.Paragraph({alignment:align,children:convertNodes(children,ctx)})]})}(c,ctx,null==cellAligns?void 0:cellAligns[i])}))})}(r,ctx,cellAligns)}))})}function buildHtml(_ref11){_ref11.type;var value=_ref11.value;return new build.Paragraph({children:[buildText(value,{})]})}function buildCode(_ref12){_ref12.type;var value=_ref12.value;_ref12.lang,_ref12.meta;return new build.Paragraph({children:[buildText(value,{})]})}function buildMath(_ref13){_ref13.type;var value=_ref13.value;return new build.Paragraph({children:[new build.TextRun(value)]})}function buildInlineMath(_ref14){_ref14.type;var value=_ref14.value;return new build.TextRun(value)}function buildText(text,deco){return new build.TextRun({text:text,bold:deco.strong,italics:deco.emphasis,strike:deco.delete})}function buildBreak(_ref15){_ref15.type;return new build.TextRun({text:"",break:1})}function buildLink(_ref16,ctx){_ref16.type;var children=_ref16.children,url=_ref16.url;_ref16.title;return new build.ExternalHyperlink({link:url,children:convertNodes(children,ctx)})}function buildImage(_ref17,images){_ref17.type;var url=_ref17.url;_ref17.title,_ref17.alt;if(!images[url])return error("Fetch image was failed: "+url);var _images$url=images[url],image=_images$url.image,width=_images$url.width,height=_images$url.height;return new build.ImageRun({data:image,transformation:{width:width,height:height}})}function buildFootnote(_ref18,ctx){_ref18.type;var children=_ref18.children;return new build.Paragraph({children:convertNodes(children,ctx)})}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var src_plugin=function plugin(){var opts=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},images={};return this.Compiler=function(node){return mdastToDocx(node,opts,images)},function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(node){var imageList,imageResolver,imageDatas;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(imageList=[],Object(unist_util_visit.a)(node,"image",(function(node){imageList.push(node)})),0!==imageList.length){_context.next=4;break}return _context.abrupt("return",node);case 4:if(imageResolver=opts.imageResolver){_context.next=7;break}throw new Error("options.imageResolver is not defined.");case 7:return _context.next=9,Promise.all(imageList.map((function(_ref2){var url=_ref2.url;return imageResolver(url)})));case 9:return imageDatas=_context.sent,images=imageList.reduce((function(acc,img,i){return acc[img.url]=imageDatas[i],acc}),{}),_context.abrupt("return",node);case 12:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}()},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),style={flex:1,padding:10,overflowY:"scroll"},textAreaStyle={width:"100%",height:"100%"},text_editor=Object(react.forwardRef)((function(_ref,ref){var initialValue=_ref.initialValue;return Object(jsx_runtime.jsx)("div",{style:style,children:Object(jsx_runtime.jsx)("textarea",{ref:ref,style:textAreaStyle,defaultValue:initialValue})})}));try{texteditor.displayName="texteditor",texteditor.__docgenInfo={description:"",displayName:"texteditor",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/text-editor.tsx#texteditor"]={docgenInfo:texteditor.__docgenInfo,name:"texteditor",path:"stories/components/text-editor.tsx#texteditor"})}catch(__react_docgen_typescript_loader_error){}var FileSaver_min=__webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");function playground_stories_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function playground_stories_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){playground_stories_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){playground_stories_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var fetchImage=function(){var _ref=playground_stories_asyncToGenerator(regeneratorRuntime.mark((function _callee(url){var image,res,buf;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return image=new Image,_context.next=3,fetch(url);case 3:return res=_context.sent,_context.next=6,res.arrayBuffer();case 6:return buf=_context.sent,_context.abrupt("return",new Promise((function(resolve,reject){image.onload=function(){resolve({image:buf,width:image.naturalWidth,height:image.naturalHeight})},image.onerror=reject,image.src=URL.createObjectURL(new Blob([buf],{type:"image/png"}))})));case 8:case"end":return _context.stop()}}),_callee)})));return function fetchImage(_x){return _ref.apply(this,arguments)}}(),toDocxProcessor=Object(lib.a)().use(remark_parse.a).use(remark_gfm.a).use(remark_frontmatter.a).use(src_plugin,{output:"blob",imageResolver:fetchImage}),toDocx=function(){var _ref2=playground_stories_asyncToGenerator(regeneratorRuntime.mark((function _callee2(s){var doc;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,toDocxProcessor.process(s);case 2:return doc=_context2.sent,_context2.abrupt("return",doc.result);case 4:case"end":return _context2.stop()}}),_callee2)})));return function toDocx(_x2){return _ref2.apply(this,arguments)}}(),playground_stories_Wrapper=(__webpack_exports__.default={title:"Playground"},function Wrapper(_ref3){var children=_ref3.children;return Object(jsx_runtime.jsx)("div",{style:Object(react.useMemo)((function(){return{width:"100vw",height:"100vh",display:"flex",flexDirection:"row",fontSize:"10.5pt"}}),[]),children:children})});playground_stories_Wrapper.displayName="Wrapper";var playground_stories_MarkdownToDocx=function MarkdownToDocx(){var ref=Object(react.useRef)(null);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{style:{padding:10},children:Object(jsx_runtime.jsx)("button",{style:{height:"100%"},onClick:playground_stories_asyncToGenerator(regeneratorRuntime.mark((function _callee3(){var blob;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(ref.current){_context3.next=2;break}return _context3.abrupt("return");case 2:return _context3.next=4,toDocx(ref.current.value);case 4:blob=_context3.sent,Object(FileSaver_min.saveAs)(blob,"example.docx");case 6:case"end":return _context3.stop()}}),_callee3)}))),children:"convert to docx"})}),Object(jsx_runtime.jsx)(playground_stories_Wrapper,{children:Object(jsx_runtime.jsx)(text_editor,{ref:ref,initialValue:'---\ntitle: "This is frontmatter"\ndate: 2020-04-30 12:34\ncategories: [JavaScript, React]\n---\n\n# heading 1\n\n## heading 2\n\n### heading 3\n\n#### heading 4\n\n##### heading 5\n\n###### heading 6\n\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n\naaaaaaaa**bold**_emphasis_~~delete~~`inline code`\n\n- list\n\n  - list\n    - list\n  - list\n  - list\n\n- [ ] not checked\n- [x] checked\n\n1. ordered list\n1. ordered list\n1. ordered list\n   1. aaa\n   1. aaa\n      1. eeeee\n      1. eeeee\n   1. aaa\n1. ordered list\n\nThis is [link to GitHub.com](https://github.com/).\n\nThis is ![image](https://github.githubassets.com/images/modules/logos_page/Octocat.png).\n\n> quote\n> quote\n> quote\n> quote\n\n> quote\n>\n> > quoted quote\n\n| Left align | Right align | Center align |\n| :--------- | ----------: | :----------: |\n| This       |        This |     This     |\n| column     |      column |    column    |\n| will       |        will |     will     |\n| be         |          be |      be      |\n| left       |       right |    center    |\n| aligned    |     aligned |   aligned    |\n\n<div style="color:red;">\nThis is <u>HTML</u>\n</div>\n\n---\n\n---\n\n```javascript\nfunction $initHighlight(block, cls) {\n  try {\n    if (cls.search(/\\bno\\-highlight\\b/) != -1)\n      return process(block, true, 0x0F) +\n             ` class="${cls}"`;\n  } catch (e) {\n    /* handle exception */\n  }\n  for (var i = 0 / 2; i < classes.length; i++) {\n    if (checkCondition(classes[i]) === undefined)\n      console.log(\'undefined\');\n  }\n\n  return (\n    <div>\n      <web-component>{block}</web-component>\n    </div>\n  )\n}\n\nexport  $initHighlight;\n```\n'})})]})};playground_stories_MarkdownToDocx.parameters=Object.assign({storySource:{source:'() => {\n  const ref = useRef<HTMLTextAreaElement>(null);\n  return (\n    <>\n      <div style={{ padding: 10 }}>\n        <button\n          style={{ height: "100%" }}\n          onClick={async () => {\n            if (!ref.current) return;\n            const blob = await toDocx(ref.current.value);\n            saveAs(blob, "example.docx");\n          }}\n        >\n          {"convert to docx"}\n        </button>\n      </div>\n      <Wrapper>\n        <TextEditor ref={ref} initialValue={text} />\n      </Wrapper>\n    </>\n  );\n}'}},playground_stories_MarkdownToDocx.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);