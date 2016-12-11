"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.killProcUnix = killProcUnix;
exports.killProcWin = killProcWin;
exports.default = killProcess;
var exec = require("child_process").exec; // needed to run cmd commands.
/* eslint-disable no-console */

// Kill processes in Unix.
function killProcUnix(pid) {
  exec("killall -9 " + pid, function (error, stdout, stderr) {
    if (error) {
      console.error("Failure to execute: " + error);
    } else {
      return { stdout: stdout, stderr: stderr };
    }
  });
}

// Kill processes in Windows.
function killProcWin(pid) {
  exec("taskkill /IM " + pid + " /F", function (error, stdout, stderr) {
    if (error) {
      console.error("Failure to execute: " + error);
    } else {
      return { stdout: stdout, stderr: stderr };
    }
  });
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
//# sourceMappingURL=killProc.js.map
