#!/usr/bin/env python3
"""Use this to build executables for the app :)
requires you to have Python 3 installed."""
from subprocess import run
import shutil

print("""Please select target system to build to.
1) mac dmg; 2) mac pkg; 3) win;
4) build for linux""")

selection = int(input())

if selection == 3:
    run("rename ..\\node_modules\\electron-devtools-installer electron-devtools-installer-tmp",
        shell=True)
else:
    run("mv ../node_modules/electron-devtools-installer electron-devtools-installer-tmp",
        shell=True)

yarn = bool(shutil.which("yarn"))

def mapTargetFromNumber(number):
    mapTarget = {
        1: "mac dmg",
        2: "mac pkg",
        3: "win",
        4: "linux"
    }
    return mapTarget.get(number, null)
os = mapTargetFromNumber(selection)

if yarn:
    run("cd .. && yarn build -- --%s && cd scripts" % selection,
        shell=True)
elif yarn is False:
    run("cd .. && npm run build -- --%s && cd scripts" % selection,
        shell=True)
