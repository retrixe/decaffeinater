const exec = require("child_process").exec;
/* eslint-disable no-console */

export function killProcUnix(pid) {
  exec(`killall -9 ${pid}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
    } else {
      return { stdout: stdout, stderr: stderr};
    }
  });
}

export function killProcWin(pid) {
  exec(`taskkill /IM ${pid} /F`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
    } else {
      return { stdout: stdout, stderr: stderr};
    }
  });
}

export default function killProcess(proc, platform) {
  if (platform !== "win32") {
    killProcUnix(proc);
  } else {
    killProcWin(proc);
  }
}