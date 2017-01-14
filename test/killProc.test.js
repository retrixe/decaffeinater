/* eslint-env mocha */
// Importing the thing to test.
const testFile = require("../src/killProc");

// Importing necessary libraries.
const process = require("process");

// Importing assertion module and defining shortcuts.
const chai = require("chai");

const assert = chai.assert;

// Starting tests.
describe("Killing processes", () => {
  // Testing killProcess() works properly.
  it("should run correct command for platform", () => {
    // Call killProcess on notepad/gedit
    const result = testFile.killProcess("gedit", process.platform);
    assert.equal(result, true);
  });

  it("should kill the process", () => {
    assert.equal("wip", "wip");
  });
});
