var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// User.sync({force:true});

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

var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'Godgives2011',{
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function(){
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log('err');
	}
);

//creates the table in postgres
//matches the model we defined
//Doesn't drop the db
User.sync();
// User({ force: true }); //drops the table compeletly (line 27ish)

app.use(bodyParser.json());
// build a user model in sqllize

app.post('/api/user', function(req, res){
	var username = req.body.user.username;
	var pass = req.body.user.password;
	// Need to create a user object and use sequelize to put that user
	// into our database

	// Match the model we created above 
	User.create({
		username: username,
		passwordhash: ""
	}).then(
		function createSuccess(user){
			res.json({
				user: user,
				message: 'create'
			});
		},
		function createError(err){
			res.send(500, err.message);
		}
	);

});

var User = sequelize.define('user', {
	username:Sequelize.STRING,
	passwordhash:Sequelize.STRING,
});


