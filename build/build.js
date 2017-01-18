/* @flow */
/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies, no-console */
var electronInstaller = require("electron-winstaller");

const resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: "/tmp/build/my-app-64",
  outputDirectory: "/tmp/build/installer64",
  authors: "My App Inc.",
  exe: "myapp.exe",
});

resultPromise.then(() => console.log("It worked!"), e => console.log(`No dice: ${e.message}`));
