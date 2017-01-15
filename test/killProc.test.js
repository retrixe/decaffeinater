/* @flow */
/* This Mocha test is purely experimental.
It does not work as of commit 90341bd and
fails all flow tests and ESLint returns
errors. The fix will arrive soon.
Just adding, the remaining issue is the
result var not available to the external block. */

/* eslint-env mocha */
// Importing the thing to test.
import killProcess from "../src/killProc";

// Importing necessary libraries.
const process = require("process");

// Importing assertion module and defining shortcuts.
const chai = require("chai");

const assert = chai.assert;

// Starting tests.
describe("Killing processes", () => {
  // Testing killProcess() works properly.
  it("should execute without errors", () => {
    // Call killProcess on notepad/gedit
    if (process.platform !== "win32") {
      const result = killProcess("gedit", process.platform);
    } else {
      const result = killProcess("notepad.exe", process.platform);
    }
    assert.equal(result, true);
  });

  it("should kill the process", () => {
    assert.equal("wip", "wip");
  });
});
