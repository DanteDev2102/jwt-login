const { sign, verify } = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config');

const createToken = (user, expiresIn) => sign(user, expiresIn);

const verifyToken = (token) => verify(token, JWT_SECRET_KEY);

module.exports = { createToken, verifyToken };
