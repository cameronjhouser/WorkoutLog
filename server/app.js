var express = require('express');
var app = express();

// points the express var to the file below
app.use(require('./middleware/headers'));

// req is linked to api/test - test server connection 
app.use('/api/test', function(req, res){
	// app.js client gets this response 
	res.send("Hello World");
});

app.listen(3000,function(){
	console.log('app is listening on 3000');
});