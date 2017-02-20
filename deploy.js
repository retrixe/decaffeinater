// @flow

/* This is a simple file designed
to enable pushing build artifacts to a repo
when a specific branch of the repo is
being built. This script is compatible with
*nix systems and is mainly built for Travis-CI
for the repo ibujs/decaffeinater on GitHub.
Update this file when you update .gitignore */

const newGitignoreContent = `node_modules/
app/index.js
app/index.js.map
app/main.js
app/main.js.map
app/index.html`;

function editGitignore() {

}
