var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '864@sddA',
      database : 'gwat',
    }
);

connection.connect();
 
var queryString = 'SELECT * FROM posts';
var retRows;
 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
		retRows = rows;
});

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   res.end(JSON.stringify(retRows));
})

app.post('/process_post', urlencodedParser, function (req, res) {
	insertData = req.body.data
	console.log(insertData.title);
	var query = connection.query('INSERT INTO posts SET ?', insertData, function(err, result) {
	// Neat!
	});
	connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
		retRows = rows;
	}); 
	res.end();
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})