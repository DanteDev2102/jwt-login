const { Router } = require('express');
const { register, login } = require('../services/user');
const __upload = require('../middlewares/upload');

const routes = Router();

routes.put('/register', __upload, async (req, res) => {
	try {
		const newUserData = req.body;
		const avatar = req.file;
		const newUser = await register(newUserData, avatar);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json(error);
	}
});

routes.put('/login', async (req, res) => {
	try {
		const userData = req.body;
		console.log(userData);
		const user = await login(userData);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routes;
