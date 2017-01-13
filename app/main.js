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
/******/ 	return __webpack_require__(__webpack_require__.s = 1014);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1008:
/***/ function(module, exports) {

module.exports = require("child_process");

/***/ },

/***/ 1014:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _electron = __webpack_require__(114);

var _killProc = __webpack_require__(476);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies */
var win = void 0;

function createWindow() {
  // Create the browser window.
  win = new _electron.BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadURL("file://" + __dirname + "/index.html");

  // Emitted when the window is closed.
  win.on("closed", function () {
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
_electron.app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    _electron.app.quit();
  }
});

_electron.app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
_electron.ipcMain.on("iCanKill?", function (event, arg) {
  (0, _killProc.killProcess)(arg, process.platform);
});

/***/ },

/***/ 114:
/***/ function(module, exports) {

module.exports = require("electron");

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var exec = __webpack_require__(1008).exec; // needed to run cmd commands.
/* eslint-disable no-console */
/* eslint-disable no-else-return */

// Kill processes in Unix.
function killProcUnix(pid) {
  var handler = function handler(error) {
    if (error) {
      console.error("Failure to execute: " + error);
      return error;
    } else {
      return true;
    }
  };
  exec("killall -9 " + pid, handler());
}

// Kill processes in Windows.
function killProcWin(pid) {
  var handler = function handler(error) {
    if (error) {
      console.error("Failure to execute: " + error);
      return error;
    } else {
      return true;
    }
  };
  exec("taskkill /IM " + pid + " /F", handler());
}

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
function killProcess(proc, platform) {
  if (platform !== "win32") {
    killProcUnix(proc);
  } else {
    killProcWin(proc);
  }
}

// Legacy ES5 code to make NodeJS work and use Mocha tests..
exports.killProcUnix = killProcUnix;
exports.killProcWin = killProcWin;
exports.killProcess = killProcess;

/***/ }

/******/ });
//# sourceMappingURL=main.js.map