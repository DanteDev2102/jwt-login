const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./utils/routes');

const app = express();

app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

routes(app);

module.exports = app;
