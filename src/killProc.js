const exec = require("child_process").exec;      // needed to run cmd commands.
/* eslint-disable no-console */
/* eslint-disable no-else-return */

// Kill processes in Unix.
export function killProcUnix(pid) {
  exec(`killall -9 ${pid}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
      return error;
    } else {
      return { error, stdout, stderr };
    }
  });
}

// Kill processes in Windows.
export function killProcWin(pid) {
  exec(`taskkill /IM ${pid} /F`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
      return { error };
    } else {
      return { error, stdout, stderr };
    }
  });
}

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
export default function killProcess(proc, platform) {
  if (platform !== "win32") {
    killProcUnix(proc);
  } else {
    killProcWin(proc);
  }
}
