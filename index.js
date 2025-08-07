const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about avocado:${textIn}.\nCreated on ${new Date().toISOString()}`;
fs.writeFileSync("./txt/output.txt", textOut);
