var express = require('express'),
	exphbs  = require('express3-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/express/foo', function(req, res){
	res.render('home');
	//res.send('sdf');
});



app.listen(process.env.PORT);