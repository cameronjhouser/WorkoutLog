// build a model in sqllize
module.exports = function(sequelize, DataTypes){
	return sequelize.define('log',{
		description: DataTypes.STRING,
			description: DataTypes.STRING,
			results: DataTypes.INTEGER,
			def: DataTypes.STRING 
			},{ 
	});
};