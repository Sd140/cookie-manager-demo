import fs from "fs";
import JavaScriptObfuscator from "javascript-obfuscator";

// Read the file of your original JavaScript Code as text
fs.readFile('public/blocking_new.js', "UTF-8", function (err, data) {
    if (err) {
        throw err;
    }

    // Obfuscate content of the JS file
    var obfuscationResult = JavaScriptObfuscator.obfuscate(data, {
        compact: true,
        controlFlowFlattening: false,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: false,
        stringArrayThreshold: 0.25
    });

    // Write the obfuscated code into a new file
    fs.writeFile('public/obfuscated-file.js', obfuscationResult.getObfuscatedCode(), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});