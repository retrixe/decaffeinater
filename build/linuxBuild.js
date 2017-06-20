/* eslint-disable import/no-extraneous-dependencies,no-console */
const debian = require("electron-installer-linux/debian");
const redhat = require("electron-installer-linux/redhat");
const flatpak = require("electron-installer-linux/flatpak");

console.log("If you are generating a flatpak installer, please install flatpak and flatpak-builder.");
console.log("If you are generating a .rpm installer, please install rpm or rpm-build depending on your distro.");
console.log("If you are generating a .deb installer, please install fakeroot and dpkg.");

let arch = process.arch;
if (process.arch === "x64") arch = "amd64";
if (process.arch === "x86") arch = "i386";
if (process.arch === "ia32") arch = "i386";

const options = {
  src: `dist/decaffeinater-linux-${process.arch}`,
  dest: "dist/installers",
  arch,
  categories: ["Utility"],
  icon: {
    "16x16": "build/icons/16x16.png",
    "32x32": "build/icons/32x32.png",
    "64x64": "build/icons/64x64.png",
    "128x128": "build/icons/128x128.png",
  },
};
const flatpakOptions = Object.assign(options, { id: "decaffeinater" });

const callback = (err) => {
  if (err) {
    console.error(err, err.stack);
    return err;
  }
  console.log(`Successfully created package at ${options.dest}`);
  return true;
};

if ("debian" in process.argv || "redhat" in process.argv || "flatpak" in process.argv) {
  process.argv.map((arg) => {
    if (arg === "debian") debian(options, callback);
    if (arg === "redhat") redhat(options, callback);
    if (arg === "flatpak") flatpak(flatpakOptions, callback);
    return true;
  });
} else {
  console.log("No arguments given, generating .deb, .rpm and .flatpak.");
  debian(options, callback);
  redhat(options, callback);
  flatpak(flatpakOptions, callback);
}
