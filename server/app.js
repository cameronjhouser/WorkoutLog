require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');

var User = sequelize.import('./models/user');

// User.sync(); 
/*sync({force: true}); Danger: THIS WILL DROP TABLE each time the app starts*/
sequelize.sync();
app.use(bodyParser.json());

app.use(require('./middleware/headers.js'));
app.use(require('./middleware/validate-sessions'));
app.use('/api/user', require('./routes/user'));
// login user 
app.use('/api/login', require('./routes/session'));
app.use('/api/definition', require('./routes/definition'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});

