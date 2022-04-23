const app = require('./app');
const { connectDB } = require('./database/connection');
const { portServer, hostServer } = require('./config');

app.listen(portServer, () => {
	console.log(`server listenning in ${hostServer}:${portServer}`);
	connectDB();
});

process.on('uncaughtException', (error) => {
	console.error(`error: ${error}`);
});
