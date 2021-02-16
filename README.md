# ethernal-cli

CLI to sync transactions with Ethernal.

Truffle artifacts are also synced through this CLI, if you are using Hardhat, use [this plugin](https://github.com/antoinedc/hardhat-ethernal).

## Installation

```bash
npm install ethernal-cli -g
```

## Usage

### Login
First, you need to login using your Ethernal credentials (only needed once).
```bash
ethernal login
```

### Listening to transactions
This will synchronize blocks, transactions & contracts to Ethernal
The CLI will connect to the URL set on the workspace you used last.
```bash
ethernal listen
```
For blocks & transactions, the whole object returned by web3 is synchronized with Ethernal.

### Artifacts Uploading
Running the ```listen``` command in a Truffle project will automatically watch your artifacts, and upload the data everytime it changes.
You can also pass a path to watch with the ```-d``` flag.
```bash
ethernal listen -d ~/solidity/my-project
```
Watch multiple directories at once:
```bash
ethernal listen -d ~/solidity/my-project,~/solidity/other-project
```

The CLI will watch artifacts in your build folder, and synchronize the following fields:
- contractName
- abi
- ast
- source

## Listen Options
All the following commands are for the ```listen``` command.

### -w
Connect to the specified workspace
```bash
ethernal listen -w workspace
```

### -d
Specifiy which directory to watch (one or more, separated by a comma)
```bash
ethernal listen -d ~/solidity/project,~/solidity/project2
```

### -s
Only listen to transactions, do not watch artifacts for changes. Useful if your blockchain is not on your local environment.
Will be ignore if the ```-l``` flag is passed
```bash
ethernal listen -s
```

### -l
Only watch artifact changes, do not listen to transactions. Useful if you ran the ```ethernal listen -s``` somewhere else.
```bash
ethernal listen -l
```

### -h
Display help
```bash
ethernal listen -h
```
