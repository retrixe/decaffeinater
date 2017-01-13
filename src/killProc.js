/* eslint-env node */
const exec = require("child_process").exec;      // needed to run cmd commands.
/* eslint-disable no-console */
/* eslint-disable no-else-return */

const resultant = { worked: false, error: false };

// Monkey-patch function for result.
function resultSuccess() {
  resultant.worked = true;
}

function addErrorToResultant(input) {
  resultant.error = input;
}

// Kill processes in Unix.
function killProcUnix(pid) {
  exec(`killall -9 ${pid}`, (error, stdout, /* eslint-disable no-unused-vars */ stderr) => {
    /* eslint-enable no-unused-vars */
    if (error) {
      console.error(`Failure to execute: ${error}`);
      addErrorToResultant(error);
    } else {
      resultSuccess();
    }
  });
}

// Kill processes in Windows.
function killProcWin(pid) {
  exec(`taskkill /IM ${pid} /F`, (error, stdout, /* eslint-disable no-unused-vars */ stderr) => {
    /* eslint-enable no-unused-vars */
    if (error) {
      console.error(`Failure to execute: ${error}`);
      addErrorToResultant(error);
    } else {
      resultSuccess();
    }
  });
}

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
function killProcess(proc, platform) {
  if (platform !== "win32") {
    killProcUnix(proc);
    return resultant.worked;
  } else {
    killProcWin(proc);
    return resultant.worked;
  }
}

// Legacy ES5 code to make NodeJS work and use Mocha tests..
exports.killProcUnix = killProcUnix;
exports.killProcWin = killProcWin;
exports.killProcess = killProcess;
