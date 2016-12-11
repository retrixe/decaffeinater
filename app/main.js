"use strict";

var _electron = require("electron");

var _killProc = require("./killProc");

var _killProc2 = _interopRequireDefault(_killProc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */

/* eslint-env node */
var productionMode = void 0;
try {
  var _installExtension = require("electron-devtools-installer");

  var _require = require("electron-devtools-installer"),
      _REACT_DEVELOPER_TOOLS = _require.REACT_DEVELOPER_TOOLS;

  productionMode = false;
} catch (err) {
  productionMode = true;
}
/* eslint-enable no-unused-vars */

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win = void 0;

function createWindow() {
  // Create the browser window.
  win = new _electron.BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadURL("file://" + __dirname + "/index.html");

  // Open the DevTools.
  if (productionMode === false) {
    win.webContents.openDevTools();
  }

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

// Inject React developer tool extension.
/* eslint-disable no-console */
/* eslint-disable no-undef */
if (productionMode === false) {
  try {
    installExtension(REACT_DEVELOPER_TOOLS).then(function (name) {
      return console.log("Added Extension:  " + name);
    }).catch(function (err) {
      return console.log("An error occurred: ", err);
    });
  } catch (err) {
    "do nothing";
  }
}

/* eslint-enable no-console */
/* eslint-enable no-undef */

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
  (0, _killProc2.default)(arg, process.platform);
});
//# sourceMappingURL=main.js.map
