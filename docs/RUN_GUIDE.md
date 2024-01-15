# smol-dev-js Run Guide

Welcome to the **smol-dev-js** project! This guide is designed to help junior engineers understand how to run the **smol-dev-js** CLI tool. We'll walk you through the process step by step.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (version 18.0.0 or higher)
- npm (comes with Node.js)

## Installation

To get started with **smol-dev-js**, you need to install the necessary npm modules. Open your terminal and run the following command:

```bash
npm install
```

This command will install all the dependencies listed in the `package.json` file.

## Running the CLI

Once the installation is complete, you can run the CLI tool using the following command:

```bash
node src/mainCLI.js
```

This command will start the CLI, and you will be prompted with options to choose from.

## Basic CLI Commands

Here are some basic commands you can use within the CLI:

- `setup`: Prepare your development environment.
- `run`: Execute your JavaScript code.
- `prompt`: Interact with the AI to generate or edit code.
- `code2spec`: Convert code into a specification document.
- `spec2code`: Generate code from a specification document.

To use a command, simply type it after the CLI has started, like so:

```bash
node src/mainCLI.js run
```

## Getting Help

If you need help or want to see the list of available commands, you can use the `--help` flag:

```bash
node src/mainCLI.js --help
```

## Additional Resources

For more detailed information on how to use **smol-dev-js**, please refer to the [README.md](../README.md) file in the project's root directory.

## Conclusion

That's it! You now know how to run the **smol-dev-js** CLI tool. If you have any questions or run into any issues, don't hesitate to consult the documentation or ask a more experienced developer for help. Happy coding!