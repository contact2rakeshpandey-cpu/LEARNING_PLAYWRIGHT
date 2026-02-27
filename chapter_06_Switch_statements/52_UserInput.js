// This works in Node.js (run with: node filename.js)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", function(age) {
    console.log("You are " + age + " years old.");
    rl.close();
});
