var express = require('express');
var app = express(); // now we can use express functions through var app

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log("Server running on port 3000");
