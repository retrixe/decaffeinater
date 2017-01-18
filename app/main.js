/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1122);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1116:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _electron=__webpack_require__(136),_killProc=__webpack_require__(532),_killProc2=_interopRequireDefault(_killProc);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}let win;function createWindow(){win=new _electron.BrowserWindow({width:800,height:600}),win.loadURL(`file://${__dirname}/index.html`),win.on("closed",()=>{win=null})}_electron.app.on("ready",createWindow),_electron.app.on("window-all-closed",()=>{"darwin"!==process.platform&&_electron.app.quit()}),_electron.app.on("activate",()=>{null===win&&createWindow()}),_electron.ipcMain.on("iCanKill?",(a,b)=>{(0,_killProc2.default)(b,process.platform)});

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=killProcess;var _child_process=__webpack_require__(1116);function killProcess(a,b){"win32"===b?(0,_child_process.execSync)(`taskkill /IM ${a} /F`,c=>{return!c||(console.error(`Failure to execute: ${c}`),!1)}):"win32"!=b&&(0,_child_process.execSync)(`killall -9 ${a}`,c=>{return!c||(console.error(`Failure to execute: ${c}`),!1)})}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map