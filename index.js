const server = require("./server.js");
const winston = require("winston");
const PORT = process.env.PORT || 9934;

process.on("uncaughtException", (err) => {    
    winston.log("error", `Uncaught Exception: ${err}`);    
    process.exit(1);    
});

process.on("uncaughtRejection" , (err, promise) => {
    winston.log("error", `Uncaught Rejection: ${err}`);
    process.exit(1);
});

server.listen(PORT, (err) => {    
    if(err) {
        return console.log(err);    
    }
    console.log(`Generic Rest Service in \'${process.env.NODE_ENV}\' environment : PORT ${PORT}`);    
});