const { hostServer, portServer } = require('../../config');

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(40),
			allowNull: false,
			validate: {
				isAlpha: true
			}
		},
		lastname: {
			type: DataTypes.STRING(40),
			allowNull: false,
			validate: {
				isAlpha: true
			}
		},
		email: {
			type: DataTypes.STRING(60),
			allowNull: false,
			validate: {
				isEmail: true
			},
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		avatar: {
			type: DataTypes.STRING(80),
			defaultValue: `${hostServer}:${portServer}/files/default.jpg`
		}
	});
};
