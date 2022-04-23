const { hash } = require('bcryptjs');
const { hostServer, portServer } = require('../config');
const { create, auth } = require('../database/storages/user');
const { createToken } = require('../utils/jwt');

const register = async (newUser, file) => {
	try {
		if (file) {
			newUser.avatar = `${hostServer}:${portServer}/files/${file.filename}`;
		}
		newUser.password = await hash(newUser.password, 10);
		const user = await create(newUser);

		if (user.error) throw new Error(user.error);

		return {
			msg: 'usuario creado con exito',
			data: { ...user }
		};
	} catch (error) {
		return { error: error.message };
	}
};

const login = async (dataUser) => {
	try {
		const User = await auth(dataUser);

		if (User.error) throw new Error(User.error);

		const token = createToken(User, '10h');

		return {
			message: 'usuario autenticado con exito',
			data: { ...User },
			token
		};
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = {
	register,
	login
};
