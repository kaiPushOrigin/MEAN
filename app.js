var express = require('express');
var app = express(); // now we can use express functions through var app

var mongojs = require('mongojs');
var db = mongojs('peopleList', ['people']); //peopleList: db, people: collection

var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public')); // use static files (css, html, js) from public directory
app.use(bodyParser.json()); //Need JSON from body

app.get('/contactList', function(req, res) {
    db.people.find(function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

app.post('/contactList', function(req, res) {
    console.log(JSON.stringify(req.body));
    db.people.insert(req.body, function(err, doc)
    {
        res.json(doc); //send the response to the angular controller
    });
});

app.delete('/contactlist/:personID', function (req, res) {
  var id = req.params.personID;
  console.log(id);
  db.people.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
      res.json(doc);
  });
});

app.get('/contactList/:personID', function(req, res) {
    var id = req.params.personID;
    console.log(id);
    db.people.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
        res.json(doc);
    });
});

app.put('/contactlist/:personID', function(req, res) {
    var id = req.params.personID;
    console.log(req.body.name);
    db.people.findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: {name: req.body.name, email: req.body.email , number: req.body.number}},
        new: true }, function(err, doc) {
            res.json(doc);
        }
    );
});


app.listen(3000);
console.log("Server running on port 3000");
