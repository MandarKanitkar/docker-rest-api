const express = require("express");
let app = express();
let configRoutes = require("./api");

configRoutes(app);

app.listen(7777, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:7777");
});