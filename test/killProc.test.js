/* eslint-env mocha */
// Importing the thing to test.
const killProcess = require("../src/killProc");

// Importing assertion module and defining shortcuts.
const chai = require("chai");

const assert = chai.assert;

// Starting test.
describe("Kill processes", () => {
  // Testing killProcess() works properly.
  it("should run correct command for platform", () => {
    assert.equal(killProcess.killProcess("gedit"), true);
  });
});
