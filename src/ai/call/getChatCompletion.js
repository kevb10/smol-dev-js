// Dependencies
const aiBridge = require("../../core/aiBridge");
const config = require("../../core/config");

/**
 * Get the completion of a chat (this is based on aiBridge and is a wrapper for it)
 * 
 * @param {Array<Object>} messages array, containing object with role/content to use
 * @param {Object} promptOpts prompt options to use, merged with default
 * @param {Function} streamListener, for handling streaming requests
 * 
 * @param {String} cacheGrp to cache under, used for grouping cache requests
 * @param {Number} tempKey to use, automatically generated if -1
 */
module.exports = async function getChatCompletion(messages, promptOpts = {}, streamListener = null, cacheGrp = "default", tempKey = -1) {
	// Get the model class
	let model = promptOpts.model;

	// And decide what we should use
	if (config.config?.provider == "anthropic") {
		model = "claude-2"
		promptOpts.total_tokens = 120 * 1000;
	} else {
		if (model == "gpt-4" || model == "smart") {
			// if (config.gpt4_32k) {
			// 	model = "gpt-4-32k";
			// }
			model = "gpt-4-1106-preview"
		}
		promptOpts.total_tokens = 4 * 1000;
	}

	// Override the config
	promptOpts.model = model;

	// // Formatting issue debugging
	// for( messageObj of messages ) {
	// 	if(messageObj.content == null || messageObj.content.indexOf("[object Object]") > 0 ) {
	// 		console.log("==========")
	// 		console.log(messages)
	// 		console.log("==========")
	// 		throw new Error("Unexpected [object Object] in message content");
	// 	}
	// }

	try {
		// Attempt to get completion with the default model
		return await aiBridge.getChatCompletion(messages, promptOpts, streamListener, cacheGrp, tempKey);
	} catch (error) {
		// If error is related to token limit, switch to gpt-4-32k and retry
		if (isTokenLimitError(error)) {
			console.log("Token limit exceeded, switching to gpt-4-32k", error)
			promptOpts.model = "gpt-4-32k";
			promptOpts.total_tokens = 32000; // Adjust token limit for the new model
			return await aiBridge.getChatCompletion(messages, promptOpts, streamListener, cacheGrp, tempKey);
		} else {
			// If the error is not related to token limit, rethrow it
			throw error;
		}
	}
}

// Helper function to determine if the error is due to token limit
function isTokenLimitError(error) {
	// Implement logic to determine if the error is due to exceeding token limit.
	// This is a placeholder and needs to be tailored to the specific error format/response you receive.
	return error.message?.includes("token limit") || error.message?.includes("Prompt is larger"); // Example condition
}