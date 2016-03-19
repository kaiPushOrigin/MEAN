var express = require('express');
var app = express(); // now we can use express functions through var app

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.listen(3000);
console.log("Server running on port 3000");
