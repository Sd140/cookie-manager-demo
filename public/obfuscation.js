import fs from "fs";
import JavaScriptObfuscator from "javascript-obfuscator";

// Read the file of your original JavaScript Code as text
fs.readFile('public/blocking_new.js', "UTF-8", function (err, data) {
    if (err) {
        throw err;
    }

    // Obfuscate content of the JS file
    const obfuscationResult = JavaScriptObfuscator.obfuscate(data, {
        compact: true,                 // Removes unnecessary whitespace and line breaks to reduce the file size.
        controlFlowFlattening: false, // Disables control flow flattening, which makes the code structure more complex 
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,   // Converts numeric values into more complex expressions (e.g., `10` -> `0xA + 0x0`).
        simplify: true,               // Simplifies the code structure (e.g., inlining variables).
        stringArrayShuffle: true,     // Shuffles the order of strings in the string array, making it harder to guess their usage.
        splitStrings: false,          // Disables splitting strings into smaller chunks, which can increase complexity but adds overhead.
        stringArrayThreshold: 0.25    // Moves 25% of the strings in the code into a separate string array for obfuscation. 
    });


    // Write the obfuscated code into a new file
    fs.writeFile('public/obfuscated-file.js', obfuscationResult.getObfuscatedCode(), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});