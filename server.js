const express = require("express");
const winston = require("winston");
const app = express();
const wrapAsync = require("./common/util.js");
const middleware = require("./common/middleware.js");
const unauthedRoutes = require("./routes/unauthedRoutes.js");

middleware(app);

app.use("/", unauthedRoutes);

app.use((err, req, res, next) => {        
    winston.log("error", `App caught an error: ${e}`);
    res.status(500).json({
        message: "Something went wrong.", 
        error: err.message,
        code: err.httpStatusCode
    });    
});

module.exports = app;