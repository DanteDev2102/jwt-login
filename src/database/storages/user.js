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

const auth = async () => {};

module.exports = { create, auth };
