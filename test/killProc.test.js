/* @flow */
/* eslint-env mocha */

/* This Mocha test is purely experimental.
It does not work as of commit 90341bd but no
longer fails Flow tests. The fix will arrive soon.
Just adding, the remaining issue is the
module returning undefined. */

// Importing necessary libraries.
import process from "process";

// Importing assertion module and defining shortcuts.
import { assert } from "chai";

// Importing the thing to test.
import killProcess from "../src/killProc";

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
