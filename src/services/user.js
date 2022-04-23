const { hash } = require('bcryptjs');
const { hostServer, portServer } = require('../config');
const { create } = require('../database/storages/user');

const register = async (newUser, file) => {
	try {
		if (file) {
			newUser.avatar = `${hostServer}:${portServer}/files/${file.filename}`;
		}
		newUser.password = await hash(newUser.password, 10);
		const user = await create(newUser);

		if (user.error) throw new Error(user.error);

		return Promise.resolve({
			msg: 'usuario creado con exito',
			data: { ...user }
		});
	} catch (error) {
		return { error: error.message };
	}
};

const login = async (user) => {};

module.exports = {
	register,
	login
};
