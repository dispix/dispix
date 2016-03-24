var compress 	= require('compression')
var express 	= require('express')
var app			= express()

app.use(compress())
app.use(express.static(__dirname + '/dist'))
app.set('views', __dirname + '/dist')
app.set('view engine', 'html')
app.get('/', function(req, res)
{
	res.render('index.html')
	res.end()
})
app.listen(8080)