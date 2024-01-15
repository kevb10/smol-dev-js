# smol-dev-js Run Guide

Welcome to the **smol-dev-js** project! This guide is designed to help junior engineers understand how to run the **smol-dev-js** CLI tool. We'll walk you through the process step by step, providing detailed information on the files involved and their purposes.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0.0 or higher)
- npm (comes with Node.js)

To check your Node.js version, run `node -v` in your terminal. If you need to install or update Node.js, visit [Node.js Downloads](https://nodejs.org/en/download/).

## Installation

To set up **smol-dev-js**, install the npm modules with the following command:

```bash
npm install
```

This will install dependencies as specified in `package.json`. The `postinstall.js` script will run automatically after installation to perform necessary setup tasks.

## Running the CLI

To start the CLI, execute:

```bash
node src/mainCLI.js
```

The `mainCLI.js` file is the entry point to the CLI tool. It initializes the CLI and presents you with interactive options.

## Basic CLI Commands

The CLI provides several commands:

- `setup`: Initializes your development environment. It uses `src/cli/command/setup.js` to configure the project.
- `run`: Executes your JavaScript code. The `src/cli/command/run.js` file handles this command.
- `prompt`: Generates or edits code with AI assistance. See `src/cli/command/prompt.js` for implementation details.
- `code2spec`: Converts code into a spec document, implemented in `src/cli/command/code2spec.js`.
- `spec2code`: Generates code from a spec document, with logic in `src/cli/command/spec2code.js`.

To use a command:

```bash
node src/mainCLI.js <command>
```

Replace `<command>` with one of the commands listed above.

## Getting Help

For assistance, append the `--help` flag:

```bash
node src/mainCLI.js --help
```

The `MainSywac.js` file configures how the CLI handles arguments and displays help information.

## Troubleshooting

If you encounter issues:

- Ensure Node.js and npm are correctly installed.
- Check that all dependencies in `package.json` are installed.
- Review error messages and consult `src/cli/OutputHandler.js` for error handling.

## Additional Resources

For comprehensive guidance, refer to the [README.md](../README.md) file and the documentation in the `docs/` folder.

## Conclusion

You're now equipped to use the **smol-dev-js** CLI tool. If you need further assistance, the documentation and community forums are excellent resources. Happy coding!