var compress = require('compression')
var express = require('express')
var app		= express()

app.use(compress())
app.use(express.static('dist'))
app.get('/', function(req, res)
{
	res.render('index.html')
	res.end()
})
app.listen(8080)