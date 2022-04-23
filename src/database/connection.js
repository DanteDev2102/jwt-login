const Sequelize = require('sequelize');
const { dbName, dbUser, dbPassword, dbHost } = require('../config');
const userSchema = require('./schemas/user');

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
	dialect: 'mysql',
	host: dbHost,
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false
		}
	}
});

const connectDB = async () => {
	const connection = sequelize.authenticate();
	const createTables = sequelize.sync({ force: true });
	Promise.all([connection, createTables])
		.then(() => {
			console.log('[db]: connect db :D');
		})
		.catch((error) => {
			console.error(`[db error]: ${error}`);
			process.exit(1);
		});
};

const USER = userSchema(sequelize, Sequelize);

module.exports = { connectDB, USER };
