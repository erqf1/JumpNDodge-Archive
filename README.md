# JumpNDodge Archive

JumpNDodge is a fast-paced endless dodge/runner game. This repository hosts **every version as a portable, no-install download** — no source code.

Want the easy route instead? Get the installer from **[erqf1/JumpNDodge](https://github.com/erqf1/JumpNDodge/releases/latest)** (Windows, Linux, macOS) or use [W Hub](https://github.com/erqf1/whub) — the game updates itself, so you never have to come back here manually.

**Since 5.0 JumpNDodge is the Rust Edition** (online multiplayer, built-in updater). Versions up to 4.9.1 are the Python version (with mods).

## Downloads

Grab any version from the [Releases page](https://github.com/erqf1/JumpNDodge-Archive/releases). Each release includes:

| File | Platform |
|---|---|
| `JumpNDodge-<version>-windows.zip` | Windows |
| `JumpNDodge-<version>-linux.zip` (bis 5.0.0) / `-linux-portable.zip` (ab 5.0.1) | Linux |
| `JumpNDodge-<version>-macos-apple-silicon.zip` / `-macos-intel.zip` | macOS (from 5.0) |

## Using the portable archive

Extract the zip for your platform anywhere (a USB stick, any folder) and run it directly. No installation, no admin rights, no changes to your system.

- **5.0 and newer (Rust Edition)**: extract and run `JumpNDodge.exe` (Windows), `./JumpNDodge` (Linux) or `JumpNDodge.app` (macOS). The game updates itself.
- **Up to 4.9.1 (Python version)**, Windows: extract the zip, run `updater.exe`. Linux: `chmod +x updater JumpNDodge`, then `./updater`.

All save data and settings stay inside that same folder, so it's easy to move, back up, or run multiple independent copies side by side.

## Starting the game

Python version (up to 4.9.1): launch via the **updater** (`updater.exe` / `updater`). It checks this repository for a newer version on every start – this is also how old installations move to the Rust Edition automatically (your save stays). The Rust Edition has its own built-in updater.

## Source code

This repository intentionally contains only compiled binaries. JumpNDodge's source code is developed in a private repository.
