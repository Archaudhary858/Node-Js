const fs = require("fs");

console.log("1");
//Blocking
// const result = fs.readFileSync("contacts.txt","utf-8");
// console.log(result);

//Non-Blocking
fs.readFile("contacts.txt","utf-8",(err,result) => {
    console.log(result);
});

console.log("2");

//Default thread pool size = 4
//Max? - 8core cpu - 8

const os =require("os");
console.log(os.cpus().length);