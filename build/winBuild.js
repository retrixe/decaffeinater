/* @flow */
/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies, no-console */
var electronInstaller = require("electron-winstaller");

const resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: "./dist/win-unpacked",
  outputDirectory: "./dist",
  authors: "Ibrahim Ansari",
  setupExe: "decaffeinater-installer.exe",
  setupMsi: "decaffeinater-installer.msi",
  iconUrl: "./build/icon.ico",
  setupIcon: "./build/icon.ico",
});

resultPromise.then(() => console.log("It worked!"), e => console.log(`No dice: ${e.message}`));
