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
/***/ function(module, exports) {

module.exports = require("child_process");

/***/ },

/***/ 1122:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _electron = __webpack_require__(136);

var _killProc = __webpack_require__(532);

var _killProc2 = _interopRequireDefault(_killProc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies */
let win;

function createWindow() {
  // Create the browser window.
  win = new _electron.BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadURL(`file://${ __dirname }/index.html`);

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
_electron.app.on("ready", createWindow);

// Quit when all windows are closed.
_electron.app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    _electron.app.quit();
  }
});

_electron.app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// Insert what to do on crash here (soon).
_electron.app.webContents.on("crashed", () => {});

// Insert what to do on unresponsive process here (soon).
_electron.app.on("unresponsive", () => {});

// Same as above except with uncaughtException
_electron.app.on("uncaughtException", () => {});

// In this file you can include the rest of your app's specific main process
_electron.ipcMain.on("iCanKill?", (event, arg) => {
  (0, _killProc2.default)(arg, process.platform);
});

/***/ },

/***/ 136:
/***/ function(module, exports) {

module.exports = require("electron");

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.killProcUnix = killProcUnix;
exports.killProcWin = killProcWin;
exports.default = killProcess;

var _child_process = __webpack_require__(1116);

// Kill processes in Unix.
// needed to run cmd commands.

// Creating a union type for processes.
function killProcUnix(pid) {
  // eslint-disable-next-line no-unused-vars
  (0, _child_process.exec)(`killall -9 ${ pid }`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${ error }`);
      return false;
    }
    return true;
  });
}

// Kill processes in Windows.

/* eslint-env node */
/* eslint-disable no-console */
function killProcWin(pid) {
  // eslint-disable-next-line no-unused-vars
  (0, _child_process.exec)(`taskkill /IM ${ pid } /F`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${ error }`);
      return false;
    }
    return true;
  });
}

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
function killProcess(proc, platform) {
  if (platform !== "win32") {
    return killProcUnix(proc);
  } else if (platform === "win32") {
    return killProcWin(proc);
  }
  return false;
}

/***/ }

/******/ });
//# sourceMappingURL=main.js.map