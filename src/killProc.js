/* @flow */
/* eslint-env node */
/* eslint-disable no-console, no-else-return */
const exec = require("child_process").exec;      // needed to run cmd commands.

// Creating a union type for processes.
type process = number | string;

// Monkey-patch function for result.
let worked = false;
function resultSuccess() {
  worked = true;
}

// Kill processes in Unix.
function killProcUnix(pid: process) {
  // eslint-disable-next-line no-unused-vars
  exec(`killall -9 ${pid}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
    } else {
      resultSuccess();
    }
  });
}

// Kill processes in Windows.
function killProcWin(pid: process) {
  // eslint-disable-next-line no-unused-vars
  exec(`taskkill /IM ${pid} /F`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
    } else {
      resultSuccess();
    }
  });
}

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
function killProcess(proc: process, platform: string) {
  if (platform !== "win32") {
    killProcUnix(proc);
    return worked;
  } else if (platform === "win32") {
    killProcWin(proc);
    return worked;
  } else {
    return false;
  }
}

// Legacy ES5 code to make NodeJS work and use Mocha tests..
exports.killProcUnix = killProcUnix;
exports.killProcWin = killProcWin;
exports.killProcess = killProcess;
