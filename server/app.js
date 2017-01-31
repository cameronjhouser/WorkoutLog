var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import('./models/user');

User.sync(); /*sync({force: true}); Danger: THIS WILL DROP TABLE each time the app starts*/
app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});

