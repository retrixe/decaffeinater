// @flow

/* This is a simple file designed
to enable pushing build artifacts to a repo
when a specific branch of the repo is
being built. This script is compatible with
*nix systems and is mainly built for Travis-CI
for the repo ibujs/decaffeinater on GitHub.
Update this file when you update .gitignore */

// Imports.
const fs = require("fs");
const child_process = require("child_process");

// New gitignore content on condition met.
const newGitignoreContent = `node_modules/
app/index.js
app/index.js.map
app/main.js
app/main.js.map
app/index.html`;

// Edit gitignore with new content with this function.
function editGitignore(newGitignore) {
  // Remove the git file.
  fs.unlinkSync("./.gitignore");

  // Create new gitignore.
  fs.openSync("./.gitignore", "w+");

  // Write new content to file.
  fs.writeFileSync("./.gitignore", newGitignore, (err) => {
    if (err) throw err;
    child_process.execSync("git add dist/* && git commit -m \"Deploy artifacts\" && git push");
  });
}

const branch = child_process.execSync("git rev-parse --abbrev-ref HEAD").toString();

if (branch === "deploy") {
  editGitignore(newGitignoreContent);
  child_process("git config user.name \"Travis CI Deployer\" && git config user.email \"$COMMIT_AUTHOR_EMAIL\"");
  child_process.execSync("git add dist/*");
  child_process.execSync("git commit -m \"\"");
  child_process.execSync("git push");
}
