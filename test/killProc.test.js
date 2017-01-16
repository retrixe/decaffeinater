/* @flow */
/* This Mocha test is purely experimental.
It does not work as of commit 90341bd but no
longer fails Flow tests. The fix will arrive soon.
Just adding, the remaining issue is the
module returning undefined. */

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
    const testFunc = () => {
      if (process.platform !== "win32") {
        return killProcess("gedit", process.platform);
      }
      return killProcess("notepad.exe", process.platform);
    };
    assert.equal(testFunc(), true);
  });

  it("should kill the process", () => {
    assert.equal("wip", "wip");
  });
});
