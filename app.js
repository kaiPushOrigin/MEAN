var express = require('express');
var app = express(); // now we can use express functions through var app

var mongojs = require('mongojs');
var db = mongojs('peopleList', ['people']); //peopleList: db, people: collection

app.use(express.static(__dirname + '/public')); // use static files (css, html, js) from public directory

app.get('/contactList', function (req, res) {
    db.people.find(function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

app.listen(3000);
console.log("Server running on port 3000");
