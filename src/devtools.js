// No Flow, will be checked randomly.
/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies, no-console */

// Importing electron-devtools-installer.
const installExtension = require("electron-devtools-installer").default;
const REACT_DEVELOPER_TOOLS = require("electron-devtools-installer").REACT_DEVELOPER_TOOLS;

// Installing devtron.
require("devtron").install();

// Installing the developer tools.
installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));
