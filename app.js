var express = require('express')
var app		= express()
// var jade	= require('jade')

// app.set('views', __dirname + '/views')
// app.set('view engine', 'html')
app.use(express.static('dist'))
app.get('/', function(req, res)
{
	res.render('index.html')
	res.end()
})
app.listen(8080, 'localhost')
