/* This Mocha test is purely experimental.
It does not work as of commit 90341bd and
fails all flow tests and ESLint returns
errors. The fix will arrive soon. */

/* @flow */
/* eslint-env mocha */
require("babel-register");

// Importing the thing to test.
const killProcFunc = require("../src/killProc");

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
      const result = killProcFunc("gedit", process.platform);
    } else {
      const result = killProcFunc("notepad.exe", process.platform);
    }
    assert.equal(result, true);
  });

  it("should kill the process", () => {
    assert.equal("wip", "wip");
  });
});
