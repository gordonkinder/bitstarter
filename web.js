#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var aboutfile = "about.html";
var contactfile = "contact.html";
var product1file = "productdemo.html";
var product2file = "productdemo2.html";
var product3file = "productdemo3.html";

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
    var product_html =fs.readFileSync(product1file).toString(); 
    response.send(product_html);
});

app.get('/productdemo2',function(request, response) {
    var product2_html =fs.readFileSync(product2file).toString();
    response.send(product2_html);
});

app.get('/productdemo3',function(request, response) {
    var product3_html =fs.readFileSync(product3file).toString();
    response.send(product3_html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
