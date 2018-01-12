const server = require("./server.js");
const winston = require("winston");
const PORT = process.env.NODE_ENV || 9934;

process.on("uncaughtException", (err) => {    
    winston.log("error", `Uncaught Exception: ${e}`);    
    process.exit(1);    
});

process.on("uncaughtRejection" , (err, promise) => {
    winston.log("error", `Uncaught Rejection: ${e}`);    
    process.exit(1);
});

server.listen(PORT, (err) => {    
    if(err) return console.log(err);    
    console.log(`Generic Rest Service: PORT ${PORT}`);        
});