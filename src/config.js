require('dotenv').config();

const config = {
	// DATABASE

	dbName: process.env.NAME_DB ?? 'login-jwt',
	dbUser: process.env.USER_DB ?? 'root',
	dbPassword: process.env.PASSWORD_DB ?? '123456', // inserte su password aqui
	dbHost: process.env.HOST_DB ?? 'localhost',

	// SERVER

	portServer: process.env.PORT_SERVER ?? 3001,
	hostServer: process.env.HOST_SERVER ?? 'http://localhost'
};

module.exports = config;
