var express = require('express')
var app		= express()
var jade	= require('jade')
var mysql 	= require('mysql')
var db 		= mysql.createConnection({host : 'localhost', user : 'pma', password : '', database : 'test'}))

db.connect()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static('public'))
app.get('/', function(req, res)
{
	res.render('skel.jade')
	res.end()
})
app.listen(8080)
