/* @flow */
/* eslint-env node */
/* eslint-disable no-console,spaced-comment */
const { execSync } = require("child_process");  // needed to run cmd commands.

// Creating a union type for processes.
/*::
type process = number | string;
*/

// Takes any parameter, detects the current platform
// and then executes correct func to kill proc.
function killProcess(proc /*: process */, platform /*: string */) {
  if (platform === "win32") {
    // eslint-disable-next-line no-unused-vars
    execSync(`taskkill /IM ${proc} /F`, (error/*: string */, stdout/*: string */, stderr/*: string */) => {
      if (error) {
        console.error(`Failure to execute: ${error}`);
        return false;
      }
      return true;
    });
  } else if (platform !== "win32") {
    // eslint-disable-next-line no-unused-vars
    execSync(`killall -9 ${proc}`, (error/*: string */, stdout/*: string */, stderr/*: string */) => {
      if (error) {
        console.error(`Failure to execute: ${error}`);
        return false;
      }
      return true;
    });
  }
}

module.exports = killProcess;
