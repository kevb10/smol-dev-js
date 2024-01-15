const path = require("path");
const config = require("./config");

// Function to get the source directory path from the configuration
module.exports = function getSrcDirPath() {
	// Use the current working directory as the base
	const CWD = process.cwd();
	
	// Retrieve the source directory from the configuration, defaulting to the current directory if not specified
	const srcDir = config.config.src_dir || ".";
	
	// Resolve the absolute path to the source directory
	return path.resolve(CWD, srcDir);
}