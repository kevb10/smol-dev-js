const fs = require("fs");
const path = require("path");
const ConfigLoader = require("@js-util/config-loader");

// This script is responsible for loading and managing the configuration for the smol AI developer tool.
// It checks for the existence of a configuration directory and loads configuration files accordingly,
// providing default values where necessary.

// Define the current working directory and the expected configuration directory path.
const cwd = process.cwd();
const configDir = path.join(cwd, ".smol-dev-js/config/");

// Check if the configuration directory exists and set a flag accordingly.
let configDirExists = fs.existsSync(configDir);

// Instantiate a new ConfigLoader with the appropriate directories and default configuration.
const config = new ConfigLoader({
	configDirList: configDirExists ? [configDir] : [],
	fileList: [],
	default: {
		// Default configuration for the main AI developer tool.
		config: {},

		// Default configuration settings for the ai-bridge module.
		aibridge: {
			// Placeholder for the OpenAI API key.
			provider: {
				// Replace with your actual OpenAI API key.
				// openai: "<YOUR_OPENAI_KEY>"
			},
			
			// Optional rate limiting for provider requests.
			// providerRateLimit: 1,
			
			// Optional latency delay between requests for rate limiting.
			providerLatencyAdd: 0,
			
			// Configuration for caching mechanisms.
			cache: {
				// Local directory caching using JSONL files.
				localJsonlDir: {
					enable: true,
					path: "./.smol-dev-js/ai-cache"
				},
				
				// MongoDB caching for completion requests.
				mongoDB: {
					enable: false,
					url: "<YOUR_MONGODB_URL>",
				},
				
				// Toggle caching for prompts and embeddings.
				promptCache: true,
				embeddingCache: true
			}
		}
	}
});

// Export the configuration object for use in other parts of the application.
module.exports = config;