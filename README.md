# decaffeinater
This thing is for people who just spend way too much time gaming when they should be utilizing time for more productive purposes. This app fixes that. Essentially, select the time, select the app, and use the app until decaffeinater automatically kills it, lol. Kinda hardcore but hehe. Built with React and Electron, for those who want to know.

## Installation
### Windows, macOS, and two-thirds on the Linux section is a stub. Concrete instructions for Windows on the way.
### Windows
[Click here](https://github.com/ibujs/decaffeinater/releases) to go to the releases page, and download the .exe file from there and install it.

### macOS
Refer to compiling binaries.

### Linux
#### Using apt on Debian, Ubuntu, and their devriatives.
[Click here](https://github.com/ibujs/decaffeinater/releases) to go to the releases page, and download the .deb file from there and install it.
#### Using rpm.
Refer to compiling binaries.
#### Using a binary.
Refer to compiling binaries.

## Compiling binaries
To compile binaries, you require a development environment (refer to Setting up a development environment) after which you can run the following commands to compile an executable, which you will find in a dist folder.
```
# macOS compilation options.
> npm run dist -- --mac dmg             # Compile a dmg on macOS (recommeded for macOS).
> npm run dist -- --mac pkg             # Compile a pkg on macOS.

# Windows compiliation options.
> npm run dist -- --win                 # Compile an exe installer on Windows.

# Linux compilation options.
> npm run dist -- --linux deb           # Compile a deb installer on apt-based Linux distros.
> npm run dist -- --linux rpm           # Compile an rpm installer on rpm-based Linux distros.
> npm run dist -- --linux tar.gz        # Compile a binary on any Linux installation.

# Compiling for all 3 platforms (using deb and dmg for macOS and Linux)
# Did you read the section below about compiling for other OSes from your own? o.o
> npm run dist -- -mwl
```

### Compiling for another OS from your current OS.
If you wish to create a package for another OS from your current OS, you need to get necessary tools which enable electron-builder to compile cross-platform.
1. Setup a development environment.
2. Follow instructions [here]() to setup cross-platform compilation.
3. Now, you can execute the command of your choice from the above section to compile a binary.

## Setting up a development environment
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
