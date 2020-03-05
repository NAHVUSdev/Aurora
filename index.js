var require;
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    "use strict";
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});
app.get('/global.css', function (req, res) {
    "use strict";
    res.sendFile('global.css', {root: path.join(__dirname, 'public/css')});
});
app.get('/default.js', function (req, res) {
    "use strict";
    res.sendFile('default.js', {root: path.join(__dirname, 'public/javascript')});
});

app.listen(8080);
