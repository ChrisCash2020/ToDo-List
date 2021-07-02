/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://use.fontawesome.com/releases/v5.15.3/css/all.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Mulish&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Mulish', sans-serif;\\r\\n}\\r\\n.title {\\r\\n  width: 100vw;\\r\\n  height: 150px;\\r\\n  font-size: 4rem;\\r\\n  color: white;\\r\\n  background-color: #707070;\\r\\n  line-height: 1.7;\\r\\n  padding: 20px;\\r\\n}\\r\\n.main {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  height: calc(100vh - 150px);\\r\\n  width: 100vw;\\r\\n  background-color: #eeeeee;\\r\\n}\\r\\n.aside {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 20px;\\r\\n  background-color: #dddddd;\\r\\n  width: 18%;\\r\\n  height: 100%;\\r\\n}\\r\\n.section {\\r\\n  width: 55.5%;\\r\\n  /* height: 100%; */\\r\\n  padding: 30px 40px;\\r\\n}\\r\\n.tab {\\r\\n  height: 100%;\\r\\n}\\r\\n.project-tab {\\r\\n  height: 100%;\\r\\n}\\r\\n.add-task {\\r\\n  text-align: center;\\r\\n}\\r\\n.section-title {\\r\\n  font-size: 2rem;\\r\\n  margin: 10px;\\r\\n}\\r\\nh3,\\r\\n.project-div {\\r\\n  padding: 10px;\\r\\n  border: 1px solid transparent;\\r\\n  border-radius: 5px;\\r\\n  font-size: 1rem;\\r\\n  margin-bottom: 2px;\\r\\n  user-select: none;\\r\\n}\\r\\nh3:hover,\\r\\n.project-div:hover,\\r\\n.add-task:hover,\\r\\n.color-change {\\r\\n  background-color: #cccccc;\\r\\n}\\r\\nh2 {\\r\\n  margin: 20px 10px;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n#title,\\r\\n#date {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  font-size: 1rem;\\r\\n  border: 1px solid transparent;\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n.btn-container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  width: 100%;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n.btn-container input {\\r\\n  width: 40%;\\r\\n  font-size: 1rem;\\r\\n  padding: 10px;\\r\\n  font-weight: 500;\\r\\n  border: 1px solid transparent;\\r\\n  border-radius: 5px;\\r\\n  color: #ffffff;\\r\\n  text-shadow: 2px 2px #000000;\\r\\n}\\r\\n#submit {\\r\\n  background-color: #40c9ff;\\r\\n}\\r\\n#cancel-submit {\\r\\n  background-color: rgba(255, 69, 0, 0.7);\\r\\n}\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n#title + p,\\r\\n#date + p {\\r\\n  margin-bottom: 3vh;\\r\\n}\\r\\n#title + p,\\r\\n#date + p {\\r\\n  font-size: 0.9rem;\\r\\n  font-weight: bold;\\r\\n  text-align: center;\\r\\n  color: orangered;\\r\\n  opacity: 0;\\r\\n  height: 0;\\r\\n  margin-bottom: 1vh;\\r\\n}\\r\\n#title.invalid + p,\\r\\n#date.invalid + p {\\r\\n  opacity: 1;\\r\\n  height: auto;\\r\\n}\\r\\n.project-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n}\\r\\n.project-div {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n.remove {\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n.special {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ToDo-List/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ToDo-List/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://ToDo-List/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://ToDo-List/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ToDo-List/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ToDo-List/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ToDo-List/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\r\nlet myProjects;\r\nif (localStorage.getItem('myProjects') === null) {\r\n  myProjects = [];\r\n} else {\r\n  myProjects = JSON.parse(localStorage.getItem('myProjects'));\r\n}\r\nlet myTasks;\r\nif (localStorage.getItem('myTasks') === null) {\r\n  myTasks = [];\r\n} else {\r\n  myTasks = JSON.parse(localStorage.getItem('myTasks'));\r\n}\r\nclass Task {\r\n  constructor(title, date, itemIndex) {\r\n    (this.title = title), (this.date = date), (this.itemIndex = itemIndex);\r\n  }\r\n  addItem(x) {\r\n    if (x === undefined) x = this;\r\n    localStorage.setItem('myTasks', JSON.stringify(myTasks));\r\n    let h3 = document.createElement('h3');\r\n    h3.classList.add('special');\r\n    let theTitle = document.createElement('i');\r\n    theTitle.textContent = `${x.title}`;\r\n    let theDate = document.createElement('i');\r\n    theDate.textContent = `${x.date}`;\r\n    let removeIcon = document.createElement('i');\r\n    h3.appendChild(theTitle);\r\n    h3.appendChild(theDate);\r\n    h3.appendChild(removeIcon);\r\n    removeIcon.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      removeItemInLS(x, myTasks, 'myTasks');\r\n      localStorage.setItem('myTasks', JSON.stringify(myTasks));\r\n      h3.remove();\r\n    });\r\n    let index = x.itemIndex;\r\n    const taskItems = document.querySelectorAll('.task-items');\r\n    taskItems.forEach((task, task_i) => {\r\n      if (task_i === index) {\r\n        task.append(h3);\r\n      }\r\n    });\r\n  }\r\n}\r\nclass Project {\r\n  constructor(title) {\r\n    this.title = title;\r\n  }\r\n  addItem(x) {\r\n    if (x === undefined) x = this;\r\n    localStorage.setItem('myProjects', JSON.stringify(myProjects));\r\n    let section = document.querySelector('.section');\r\n    let projectContainer = document.querySelector('.project-container');\r\n    let projectBtn = document.createElement('h3');\r\n    projectBtn.classList.add('btns', 'active', 'project-div');\r\n    let projectDiv = document.createElement('div');\r\n    projectDiv.style.display = 'flex';\r\n    projectDiv.style.flexDirection = 'row';\r\n    projectDiv.style.alignItems = 'center';\r\n    let removeIcon = document.createElement('i');\r\n    let listIcon = document.createElement('i');\r\n    listIcon.style.marginRight = '10px';\r\n    let projectText = document.createElement('h4');\r\n    removeIcon.classList.add('fas', 'fa-plus', 'remove');\r\n    listIcon.classList.add('fas', 'fa-tasks');\r\n    projectDiv.appendChild(listIcon);\r\n    projectText.textContent = `${x.title}`;\r\n    projectDiv.appendChild(listIcon);\r\n    projectDiv.appendChild(projectText);\r\n    projectBtn.appendChild(projectDiv);\r\n    projectBtn.appendChild(removeIcon);\r\n    let projectTab = document.createElement('div');\r\n    projectTab.classList.add('tab');\r\n    projectTab.style.display = 'none';\r\n    let tabSectionTitle = document.createElement('h1');\r\n    tabSectionTitle.textContent = `${x.title}`;\r\n    let tabAddTasks = document.createElement('h3');\r\n    tabAddTasks.classList.add('add-task');\r\n    tabAddTasks.innerHTML = `<i class=\"fas fa-plus\"></i> &nbsp&nbspAdd task`;\r\n    tabSectionTitle.classList.add('section-title');\r\n    projectTab.appendChild(tabSectionTitle);\r\n    projectTab.appendChild(tabAddTasks);\r\n    projectContainer.appendChild(projectBtn);\r\n    section.appendChild(projectTab);\r\n    removeIcon.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      removeItemInLS(x, myProjects, 'myProjects');\r\n      localStorage.setItem('myProjects', JSON.stringify(myProjects));\r\n      projectBtn.remove();\r\n      projectTab.remove();\r\n    });\r\n    let btns = document.querySelectorAll('.btns');\r\n    const tabs = document.querySelectorAll('.tab');\r\n    btns.forEach((btn, btn_i) => {\r\n      btn.addEventListener('click', () => {\r\n        btns.forEach((btn) => {\r\n          btn.classList.remove('active');\r\n          btn.classList.remove('color-change');\r\n        });\r\n        btn.classList.add('active');\r\n        btn.classList.add('color-change');\r\n        tabs.forEach((content, content_i) => {\r\n          if (content_i == btn_i) {\r\n            content.style.display = 'block';\r\n          } else {\r\n            content.style.display = 'none';\r\n          }\r\n        });\r\n      });\r\n    });\r\n  }\r\n}\r\nfunction addItemForm(item, itemForm) {\r\n  item.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    item.classList.toggle('hide');\r\n    itemForm.classList.toggle('hide');\r\n  });\r\n}\r\nfunction cancelItemForm(\r\n  cancelItem,\r\n  item,\r\n  itemForm,\r\n  itemFormTitle,\r\n  itemFormDate\r\n) {\r\n  cancelItem.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    item.classList.toggle('hide');\r\n    itemForm.classList.toggle('hide');\r\n    itemFormTitle.classList.remove('invalid');\r\n    if (itemFormDate != undefined) {\r\n      itemFormDate.classList.remove('invalid');\r\n    }\r\n    itemForm.reset();\r\n  });\r\n}\r\nfunction submitItemForm(\r\n  submitItem,\r\n  itemFormTitle,\r\n  item,\r\n  itemForm,\r\n  classType,\r\n  myItem,\r\n  string,\r\n  itemFormDate\r\n) {\r\n  let titleVal = itemFormTitle.value;\r\n  let returnVal;\r\n  let test = myItem.map((element, i, arr) => {\r\n    if (element.title === itemFormTitle.value) {\r\n      returnVal = true;\r\n    } else {\r\n      returnVal = false;\r\n    }\r\n  });\r\n  if (classType === Project) {\r\n    submitItem.addEventListener('click', (e) => {\r\n      e.preventDefault;\r\n      if (\r\n        (titleVal.length > 0 && returnVal === false) ||\r\n        (myItem.length === 0 && titleVal.length > 0)\r\n      ) {\r\n        itemFormTitle.classList.remove('invalid');\r\n        let newItem = new classType(itemFormTitle.value);\r\n        storItemInLS(newItem, myItem, string);\r\n        itemForm.reset();\r\n        item.classList.toggle('hide');\r\n        itemForm.classList.toggle('hide');\r\n        return newItem.addItem();\r\n      } else {\r\n        itemFormTitle.classList.add('invalid');\r\n      }\r\n    });\r\n  }\r\n  if (classType === Task) {\r\n    let dateVal = itemFormDate.value;\r\n    submitItem.forEach((item, item_i) => {\r\n      item.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (\r\n          (titleVal.length > 0 && returnVal === false && dateVal.length > 0) ||\r\n          (myItem.length === 0 && titleVal.length > 0 && dateVal.length > 0)\r\n        ) {\r\n          let newItem = new classType(\r\n            itemFormTitle.value,\r\n            itemFormDate.value,\r\n            item_i\r\n          );\r\n          storItemInLS(newItem, myItem, string);\r\n          itemForm.reset();\r\n          item.classList.toggle('hide');\r\n          itemForm.classList.toggle('hide');\r\n          return newItem.addItem();\r\n        }\r\n        if (titleVal.length <= 0) {\r\n          itemFormTitle.classList.add('invalid');\r\n        } else {\r\n          itemFormTitle.classList.remove('invalid');\r\n        }\r\n        if (dateVal.length <= 0) {\r\n          itemFormDate.classList.add('invalid');\r\n        } else {\r\n          itemFormDate.classList.remove('invalid');\r\n        }\r\n      });\r\n    });\r\n  }\r\n}\r\nlet addProjectBtn = document.querySelector('.add-project');\r\nlet projectForm = document.querySelector('.project-form');\r\nlet cancelProjectBtn = document.querySelector('.project-form #cancel-submit');\r\nlet submitProjectBtn = document.querySelector('.project-form #submit');\r\nlet formProjectTitle = document.querySelector('.project-form #title');\r\naddItemForm(addProjectBtn, projectForm);\r\nsubmitItemForm(\r\n  submitProjectBtn,\r\n  formProjectTitle,\r\n  addProjectBtn,\r\n  projectForm,\r\n  Project,\r\n  myProjects,\r\n  'myProjects'\r\n);\r\ncancelItemForm(cancelProjectBtn, addProjectBtn, projectForm, formProjectTitle);\r\nlet addTaskBtn = document.querySelector('.add-task');\r\nlet taskForm = document.querySelector('.task-form');\r\nlet cancelTaskBtn = document.querySelector('.task-form #cancel-submit');\r\nlet submitTaskBtn = document.querySelectorAll('.task-form #submit');\r\nconsole.log(submitTaskBtn);\r\nlet formTaskTitle = document.querySelector('.task-form #title');\r\nlet formTaskDate = document.querySelector('.task-form #date');\r\n// addItemForm(addTaskBtn, taskForm);\r\n// submitItemForm(\r\n//   submitTaskBtn,\r\n//   formTaskTitle,\r\n//   addTaskBtn,\r\n//   taskForm,\r\n//   Task,\r\n//   myTasks,\r\n//   'myTasks',\r\n//   formTaskDate\r\n// );\r\n// cancelItemForm(\r\n//   cancelTaskBtn,\r\n//   addTaskBtn,\r\n//   taskForm,\r\n//   formTaskTitle,\r\n//   formTaskDate\r\n// );\r\nfunction storItemInLS(item, myItem, string) {\r\n  myItem.push(item);\r\n  localStorage.setItem(`${string}`, JSON.stringify(myItem));\r\n}\r\nfunction removeItemInLS(listItem, myItem, string) {\r\n  myItem.map((element, index) => {\r\n    if (element.title == listItem.title) {\r\n      myItem.splice(index, 1);\r\n    }\r\n  });\r\n  localStorage.setItem(`${string}`, JSON.stringify(myItem));\r\n}\r\nfunction getProjects() {\r\n  myProjects.forEach((project) => {\r\n    Object.setPrototypeOf(project, Project);\r\n    project.prototype.addItem(project);\r\n  });\r\n}\r\nfunction getTasks() {\r\n  myTasks.forEach((task) => {\r\n    Object.setPrototypeOf(task, Task);\r\n    task.prototype.addItem(task);\r\n  });\r\n}\r\ndocument.addEventListener('DOMContentLoaded', getProjects);\r\ndocument.addEventListener('DOMContentLoaded', getTasks);\r\nlet btns = document.querySelectorAll('.btns');\r\nconst tabs = document.querySelectorAll('.tab');\r\nbtns.forEach((btn, btn_i) => {\r\n  btn.addEventListener('click', () => {\r\n    btns.forEach((btn) => {\r\n      btn.classList.remove('active');\r\n      btn.classList.remove('color-change');\r\n    });\r\n    btn.classList.add('active');\r\n    btn.classList.add('color-change');\r\n    tabs.forEach((content, content_i) => {\r\n      if (content_i == btn_i) {\r\n        content.style.display = 'block';\r\n      } else {\r\n        content.style.display = 'none';\r\n      }\r\n    });\r\n  });\r\n});\r\nlet allProjectInput = document.querySelectorAll('.task-form > input');\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;