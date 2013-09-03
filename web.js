#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer (express.logger());
app.use(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

app.get('/about', function(request, response) {
    res.send(fs.readFileSync('./about.html').toString());
});

app.get('/contact', function(request,response) {
    res.send(fs.readFileSync('.contact.html').toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
