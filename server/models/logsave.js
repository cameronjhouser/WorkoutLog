module.exports = function(sequelize, DataTypes){
	// with log, the first argument is going to represent a column in the db table

	return sequelize.log('logsave',{
		resultsave:DataTypes.STRING,
		workoutselect:DataTypes.STRING, //by time, reps, weight
		notesave:DataTypes.STRING,

		owner:DataTypes.INTEGER 
	},{
	});
};