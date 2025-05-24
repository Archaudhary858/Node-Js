const { error } = require("console");//filesystem
const fs = require("fs");

//WRITE FILE

//synchronous call --> Blocking
// fs.writeFileSync("./text.txt","Hey world");

//async --> Non-Blocking
// fs.writeFile("./text.txt","Hey world async",(err) => {})

//READ FILE

//synch
// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

//async -->  need a callback function as it will not return anything as synch...
fs.readFile("./contacts.txt","utf-8",(err,result) => {
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})

//APPEND FILE

fs.appendFileSync("./text.txt",new Date().getDate().toLocaleString());

//COPY A FILE
fs.cpSync("./text.txt","./copy.txt");


//DELETE FILE
fs.unlinkSync("./copy.txt");