"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.killProcUnix = killProcUnix;
exports.killProcWin = killProcWin;
exports.default = killProcess;
var exec = require("child_process").exec;
/* eslint-disable no-console */

function killProcUnix(pid) {
  exec("killall -9 " + pid, function (error, stdout, stderr) {
    if (error) {
      console.error("Failure to execute: " + error);
    } else {
      return { stdout: stdout, stderr: stderr };
    }
  });
}

function killProcWin(pid) {
  exec("taskkill /IM " + pid + " /F", function (error, stdout, stderr) {
    if (error) {
      console.error("Failure to execute: " + error);
    } else {
      return { stdout: stdout, stderr: stderr };
    }
  });
}

function killProcess(proc, platform) {
  if (platform !== "win32") {
    killProcUnix(proc);
  } else {
    killProcWin(proc);
  }
}
//# sourceMappingURL=killProc.js.map
