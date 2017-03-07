# decaffeinater
## Dependency status: [![dependencies Status](https://david-dm.org/ibujs/decaffeinater/status.svg)](https://david-dm.org/ibujs/decaffeinater) [![devDependencies Status](https://david-dm.org/ibujs/decaffeinater/dev-status.svg)](https://david-dm.org/ibujs/decaffeinater?type=dev) [![Dependency Status](https://dependencyci.com/github/ibujs/decaffeinater/badge)](https://dependencyci.com/github/ibujs/decaffeinater) [![Greenkeeper badge](https://badges.greenkeeper.io/ibujs/decaffeinater.svg)](https://greenkeeper.io/)

## Current build status:
### Windows:
[![Build Status](https://ci.appveyor.com/api/projects/status/mi1xslomqvmq1e46)](https://ci.appveyor.com/project/ibujs/decaffeinater)
### macOS:
[![Build Status](https://travis-ci.org/ibujs/decaffeinater.svg?branch=master)](https://travis-ci.org/ibujs/decaffeinater)
### Linux:
[![Build Status](https://circleci.com/gh/ibujs/decaffeinater.svg?style=svg)](https://circleci.com/gh/ibujs/decaffeinater)

## Enough badges, let's cut to the chase, shall we?
This thing is for people who just spend way too much time gaming when they should be utilizing time for more productive purposes. This app fixes that. Essentially, select the time, select the app, and use the app until decaffeinater automatically kills it. Kinda hardcore. Built with React and Electron :)

### Use Yarn 0.23.0+ (nightly as of 7/3/2017), else yarn throws errors.

## Installation (quick copy-and-paste job, for more clarity, open an issue in the issue section :3 )
### Windows
[Click here](https://github.com/ibujs/decaffeinater/releases) to go to the releases page, and download the .exe file for the latest stable release from there and install it.

### macOS (stub, will change thanks to build servers)
Refer to compiling binaries.

### Linux
#### Using apt on Debian, Ubuntu, and their devriatives.
[Click here](https://github.com/ibujs/decaffeinater/releases) to go to the releases page, and download the .deb file for the latest stable release from there and install it.
#### Using rpm.
[Click here](https://github.com/ibujs/decaffeinater/releases) to go to the releases page, and download the .rpm file for the latest stable release from there and install it.
#### Using a binary.
[Click here](https://github.com/ibujs/decaffeinater/releases) to go to the releases page, and download the .tar.gz file for the latest stable release from there and install it.

## Compiling binaries
To compile binaries, you require a development environment (refer to Setting up a development environment) after which you can run the following commands to compile an executable, which you will find in a dist folder.
```
# macOS compilation options.
> npm run dist -- --mac dmg             # Compile a dmg on macOS (recommeded for macOS).
> npm run dist -- --mac pkg             # Compile a pkg on macOS.

# Windows compiliation options.
> npm run make-exe                      # Compile an exe installer on Windows.

# Linux compilation options.
> npm run dist -- --linux deb           # Compile a deb installer on apt-based Linux distros.
> npm run dist -- --linux rpm           # Compile an rpm installer on rpm-based Linux distros.
> npm run dist -- --linux tar.gz        # Compile a binary on any Linux installation.

# Compiling for all 3 platforms (using deb and dmg for macOS and Linux)
# Did you read the section below about compiling for other OSes from your own? o.o
> npm run dist -- --mac --linux && npm run make-exe
```

### Compiling for another OS from your current OS.
If you wish to create a package for another OS from your current OS, you need to get necessary tools which enable electron-builder to compile cross-platform.

1. Setup a development environment.
2. Follow instructions [here](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) to setup cross-platform compilation.
3. Now, you can execute the command of your choice from the above section to compile a binary.

## Setting up a development environment
Setting up a development environent requires Node.js. [Click here](https://nodejs.org/en/download/) to download the latest LTS version (Current also works though) of node.js for Windows and macOS, and [click here](https://nodejs.org/en/download/package-manager/) to install the newest version of node.js on most Linux distributions.

Next, download the code in this repository by [clicking here](https://github.com/ibujs/decaffeinater/archive/master.zip) and unzip it in a folder, or simply clone this repository.

Finally, open a terminal window in the folder where the app is located and execute the following commands (with an internet connection):
```
> npm install
> npm start
```
### Recommended development tools and standards:
- [ ] Atom with linter-eslint package, or Visual Studio Code with the flowtype and ESLint plugins.
- [ ] Node.js v6/v7
- [ ] Yarn package manager instead of npm
- [ ] React development tools on Electron ([refer here](https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md))
- [ ] DevTron on Electron ([refer here] (electron.atom.io/devtron))

#### The basic directory structure.
- `src/` contains everything that is executed.
- `app/` containg a package.json which is bundled with the app, and compiled files.
- `build/` contains build configuration and build tasks.
- `dist/` is generated when you compile the app, you will find executables and installers inside.
- `test/` contains tests run by mocha using chai.
- `flow-typed/` contains typings for flow.

#### Coding standards.
- Everything can be coded in ES6 (also ESNext and ES2017) except `webpack.config.js` and `build/*`. Anything in `app` (excluding the `package.json` inside) and `flow-typed` is not to be touched, these are generated directories.
- Please lint your code with ESLint and type check it with Flow (command to do this coming soon, rn use plugins for your code editor). ESLint follows the airbnb coding standard.
