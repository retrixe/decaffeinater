/* @flow */
/* eslint-env node */
/* eslint-disable no-console */
import { execSync } from "child_process";  // needed to run cmd commands.

// Creating a union type for processes.
type process = number | string;

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
export default function killProcess(proc: process, platform: string) {
  if (platform === "win32") {
    // eslint-disable-next-line no-unused-vars
    execSync(`taskkill /IM ${proc} /F`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Failure to execute: ${error}`);
        return false;
      }
      return true;
    });
  } else if (platform !== "win32") {
    // eslint-disable-next-line no-unused-vars
    execSync(`killall -9 ${proc}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Failure to execute: ${error}`);
        return false;
      }
      return true;
    });
  }
}
