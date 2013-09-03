#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var aboutfile = "about.html";
var contactfile = "contact.html";
var productfile = "productdemo.html";

var app = express.createServer (express.logger());
app.use(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

app.get('/about', function(request, response) {
    var about_html = fs.readFileSync(aboutfile).toString();
    response.send(about_html);
});

app.get('/contact', function(request, response) {
    var contact_html =fs.readFileSync(contactfile).toString();
    response.send(contact_html);
});

app.get('/productdemo', function(request, response) {
    var product_html =fs.readFileSync(productfile).toString(); 
    response.send(product_html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
