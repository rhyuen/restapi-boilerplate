const express = require("express");
const app = express();
const wrapAsync = require("./common/util.js");
const middleware = require("./common/middleware.js");

middleware(app);

app.get("/", wrapAsync(async (req, res) => {        
    res.status(200).json({
            route: "/",
            message: "Welcome to my generic service.",
            routes: "Routes available are /"
    });    
}));

app.get("*", wrapAsync(async (req, res, next) => {    
    res.status(404).json({
        route: "notfound",
        message: "This route doesn't exist"
    });
}));

app.use((err, req, res, next) => {        
    res.json({
        message: "Something went wrong.", 
        error: err.message,
        code: err.httpStatusCode
    });    
});

module.exports = app;