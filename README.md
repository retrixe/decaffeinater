# decaffeinater
This thing is for people who just spend way too much time gaming when they should be utilizing time for more productive purposes. This app fixes that. Essentially, select the time, select the app, and use the app until decaffeinater automatically kills it, lol. Kinda hardcore but hehe.

Built with React and Electron, for those who want to know.

## Installation

### Windows isn't here yet, please wait.

### macOS
Binaries still need to be made, but they can be generated by setting up a development environment, then running ```npm run dist```. Once it's complete, you will find an installer in the dist folder.

### Linux
#### Using apt on Debian, Ubuntu, and their devriatives.
[Click here](https://github.com/ibujs/decaffeinater/releases) to go to the releases page, and download the .deb file from there. Install it (buggy for now, fix will arrive soon).
#### Using rpm.
Refer to compiling binaries.
#### Using a binary.
Needs instructions.

## Compiling binaries
### This is a stub, covers only RPM. Refer [here](https://github.com/electron-userland/electron-builder/blob/master/README.md) for better instructions.
### For reference, [electron-builder](https://github.com/electron-userland/electron-builder) is used as the solution to compile this application.
Set up a development environment, then run ```npm run dist --linux rpm```. Find the installer in the newly made dist folder.
For multi-platform builds, refer [here.](https://github.com/electron-userland/electron-builder/blob/master/README.md)

## Setting up a development environent.
Setting up a development environent requires Node.js. [Click here](https://nodejs.org/en/download/) to download the latest LTS version (Current also works though) of node.js for Windows and macOS, and [click here](https://nodejs.org/en/download/package-manager/) to install the newest version of node.js on most Linux distributions.

Next, download the code in this repository by [clicking here](https://github.com/ibujs/decaffeinater/archive/master.zip) and unzip it in a folder, or simply clone this repository.

Finally, open a terminal window in the folder where the app is located and execute the following commands (with an internet connection):
```
> npm install
> npm start
```
### Recommended development tools:
- [ ] Atom with linter-eslint package, or Visual Studio Code.
- [ ] Node.js v6/v7
- [ ] Yarn package manage instead of npm
- [ ] React development tools on Electron ([refer here](https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md))
