var express = require('express');

// instanciar
var app = express();


app.use(express.static('public'));
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});
app.get('/about', function(req, res){
  res.sendfile(__dirname + '/public/about.html');
});

// escuchar
app.listen(9000);
