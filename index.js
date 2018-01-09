const mongoose = require("mongoose");
const server = require("./server.js");
const PORT = process.env.NODE_ENV || 9934;

process.on("uncaughtException", (err) => {    
    console.log("uncaughtexception");    
    process.exit(1);    
});

process.on("uncaughtRejection" , (err, promise) => {
    console.log(err);
    process.exit(1);
});

server.listen(PORT, (err) => {    
    if(err) return console.log(err);
    console.log(`Generic Rest Service: PORT ${PORT}`);        
});