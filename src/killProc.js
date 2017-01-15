/* @flow */
/* eslint-env node */
/* eslint-disable no-console */
import { exec } from "child_process";  // needed to run cmd commands.

// Creating a union type for processes.
type process = number | string;

// Kill processes in Unix.
export function killProcUnix(pid: process) {
  // eslint-disable-next-line no-unused-vars
  exec(`killall -9 ${pid}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
      return false;
    }
    return true;
  });
}

// Kill processes in Windows.
export function killProcWin(pid: process) {
  // eslint-disable-next-line no-unused-vars
  exec(`taskkill /IM ${pid} /F`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failure to execute: ${error}`);
      return false;
    }
    return true;
  });
}

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
export default function killProcess(proc: process, platform: string) {
  if (platform !== "win32") {
    return killProcUnix(proc);
  } else if (platform === "win32") {
    return killProcWin(proc);
  }
  return false;
}

module.exports = killProcess;
