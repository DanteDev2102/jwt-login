const { verifyToken } = require('../utils/jwt');

const ensureAuth = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).send({ error: 'No Tenes Acceso :C' });
	}

	const token = req.headers.authorization;

	const payload = verifyToken(token);

	try {
		if (payload.exp <= Math.round(Date.now() / 1000)) {
			return res.status(400).send({ error: 'TOKEN EXPIRADO' });
		}
	} catch (err) {
		return res.status(404).send({ error: 'TOKEN INVALIDO' });
	}

	req.user = payload;
	next();
};

module.exports = { __auth: ensureAuth };
