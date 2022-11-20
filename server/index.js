const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static(path.join(__dirname, "..", "build", "web")));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "web", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("server started on port" + process.env.PORT || "5000" );
});