const { compare } = require('bcryptjs');

const { USER } = require('../connection');

const create = async ({
	email,
	password,
	name,
	lastname,
	avatar
}) => {
	try {
		const [{ dataValues }, created] = await USER.findOrCreate({
			where: { email },
			defaults: { email, password, name, lastname, avatar }
		});

		delete dataValues.password;

		if (!created) {
			throw new Error(
				`ya existe un usuario con el email: ${dataValues.email}`
			);
		}

		return dataValues;
	} catch (error) {
		return { error: error.message };
	}
};

const auth = async ({ email, password }) => {
	try {
		const { dataValues } = await USER.findOne({
			where: { email }
		});

		if (!dataValues) {
			throw new Error('error en el email o contraseña');
		}

		const isCorrectPassword = compare(
			password,
			dataValues.password
		);

		if (!isCorrectPassword) {
			throw new Error('error en el email o contraseña');
		}

		delete dataValues.password;

		return dataValues;
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = { create, auth };
