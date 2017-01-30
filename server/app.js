var express = require('express');
var app = express();

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello Wolrd");
});

app.listen(3000,function(){
	console.log('app is listening on 3000');
});