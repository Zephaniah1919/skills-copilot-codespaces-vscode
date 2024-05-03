// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request to /comments with an array of comments. Each comment should have a body and a date. The body should be a string, and the date should be a string in the format YYYY-MM-DD.

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.json([{
    body: "This is a comment",
    date: "2017-06-01"
  }]);
});

app.listen(3000);