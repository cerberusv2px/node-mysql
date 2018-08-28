var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/temp.html`);
});

app.post('/submit-student-data', (req, res) => {
  var name = `${req.body.firstName} ${req.body.lastName}`;
  res.send(`${name} submitted`);
});

var server = app.listen(5000, () => {
  console.log('Node server running...');
});