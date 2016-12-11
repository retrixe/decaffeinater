/* eslint-env node */
import {app, BrowserWindow, ipcMain} from "electron";
import killProcess from "./killProc";
/* eslint-disable no-unused-vars */

let productionMode;
try {
  const installExtension = require("electron-devtools-installer");
  const {REACT_DEVELOPER_TOOLS} = require("electron-devtools-installer");
  productionMode = false;
} catch(err) {
  productionMode = true;
}
/* eslint-enable no-unused-vars */

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });

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
app.on("ready", createWindow);

// Inject React developer tool extension.
/* eslint-disable no-console */
/* eslint-disable no-undef */
if (productionMode === false) {
  try {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log("An error occurred: ", err));
  } catch(err) {
    "do nothing";
  }
}

/* eslint-enable no-console */
/* eslint-enable no-undef */

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
ipcMain.on("iCanKill?", (event, arg) => {
  killProcess(arg, process.platform);
});