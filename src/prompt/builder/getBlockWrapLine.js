// The charset to iterate with
const midSegmentCharset = "~-=+!@#$%&*:|".split('');

/**
 * Given the input string, derive a suitable 'block' wrapper line to use.
 * This is unique, and not used - as a separator.
 * 
 * @param {String} data - The string to be wrapped in a block.
 * @returns {String} - A unique block wrap line that does not exist in the input data.
 * @throws {Error} - Throws an error if no valid block wrap line can be found.
 */
module.exports = function getBlockWrapLine(data) {
	// Trim the data provided
	data = data.trim();

	// Use markdown code fence if possible
	if (!data.includes("```")) {
		return '```';
	}

	// Markdown code fence failed, let's find a more complicated version
	for (const midChar of midSegmentCharset) {
		// Build the line break with unique characters
		let codeLineBreak = `<<{{${midChar.repeat(2)}}}>>`;
		// Check that it does not exist in the data
		if (!data.includes(codeLineBreak)) {
			return codeLineBreak;
		}
	}
	
	// All searches have failed, throw an error
	throw new Error("Unable to find valid 'block wrap line', exhausted all options");
};