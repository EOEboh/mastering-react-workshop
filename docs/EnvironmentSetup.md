# Workshop Environment Setup

Hey there 10x dev!

For this workshop to be successful, you need to follow along with the required tools:

You need a personal computer. It could be Linux, Windows or Mac, it doesn't matter which OS you will be using.

## Command Line Tools

You can install the Git CLI (Git Bash) or alternatively, you can use your built-in command line on your computer: Whether Terminal for Macs, Powershell or Command Prompt for Windows or any executable CLI for your Linux distro.

### Node.js and NPM \*required

These two packages come together, so just head on to [Nodejs.org](https://nodejs.org/en/download)

### Yarn \*required

To download Yarn

```
npm install --global yarn
```

### Git \*required

To download the Git CLI, follow [the directions here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#_installing_on_macos).

## Code Editor/IDE \*required

You will need to have some kind of IDE or text editor installed that you are comfortable with. Common options include VSCode, Sublime, Atom, or even Vim.

The facilitator will be using VSCode. You do not have to use the same Code Editor.

#### Installed Extensions

Prettier - Code formatter

An extension to format your javascript code.

### Facilitator VSCode Configuration

#### Settings.json

The following settings in the facilitator's VSCode change some default behavior and you may notice it during the workshop.

`"editor.defaultFormatter": "esbenp.prettier-vscode"` - Prettier for VS Code is my default formatter

`"editor.formatOnSave": true` - File will be autoformatted according to configuration when saved.

Further prettier configurations:

```
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  },
  "sonarlint.rules": {
    "javascript:S3358": {
      "level": "on"
    },
    "javascript:S6638": {
      "level": "on"
    }
  },
```

## Project setup \*required

You will need to set up this project to follow along in the workshop. Please refer to the [setup instructions in the README](../README.md#Setup).
