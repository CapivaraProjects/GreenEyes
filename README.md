# GreenEyes
[![Build Status](https://travis-ci.org/CapivaraProjects/GreenEyes.svg?branch=master)](https://travis-ci.org/CapivaraProjects/GreenEyes)

This repository is dedicated to Green Eyes project
An project dedicated for recognition of plants disease by images from leaves of plants

# Running
Clone this repository:

```zsh
git clone https://github.com/CapivaraProjects/GreenEyes.git
```

## Dependencies
- Please install android studio, android sdk and create an android emulator with version >= 26
- Install npm and node js
- Run the following command after clone: `npm install # this commmand will install all js dependencies` 
- On linux, update sysctl informations:

```zsh
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
sysctl --system
```

## Running

- Open android studio and start emulator
- Start react-native server: `react-native start`
- Install app on emulator: `react-native run-android`

### Use expo

You can also use expo to run on your device:

```zsh
expo start
```
