const server = require("./server.js");
const logger = require("./common/logger.js");
const PORT = process.env.PORT || 8080;

process.on("uncaughtException", (err) => {
    logger.error(err);
    process.exit(1);
});

server.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Generic Rest Service in \'${process.env.NODE_ENV}\' environment : PORT ${PORT}`);
});