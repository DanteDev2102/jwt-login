const { static } = require('express');
const { join } = require('path');
const userRouter = require('../routes/user');

module.exports = (server) => {
	server.use('/auth', userRouter);
	server.use('/files', static(join(`${__dirname}/../files`)));
};
