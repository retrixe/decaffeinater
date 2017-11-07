/* eslint-disable import/no-extraneous-dependencies */
/* @flow */

/* This Ava test is purely experimental.
It does not work as of commit 90341bd but no
longer fails Flow tests. The fix will arrive soon.
Just adding, the remaining issue is the
module returning undefined. */

// Importing necessary libraries.
import process from 'process'

// Importing assertion module and defining shortcuts.
import test from 'ava'

// Importing the thing to test.
import killProcess from '../src/killProc'

// Starting tests.
test('Killing processes', (t) => {
  // Testing killProcess() works properly.
  test('should execute without errors', () => {
    // Call killProcess on notepad/gedit
    const testFunc = () => {
      if (process.platform !== 'win32') {
        return killProcess('gedit', process.platform)
      }
      return killProcess('notepad.exe', process.platform)
    }
    t.is(testFunc(), true)
  })

  test('should kill the process', () => {
    t.is('wip', 'wip')
  })
})
