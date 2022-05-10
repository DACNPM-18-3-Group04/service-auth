const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const db = require('./configs/database.config');
db.connect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const ErrorMdw = require('./components/error/error.middleware');
app.use(ErrorMdw.handleBadJSONParseError);

const accessMdw = require('./components/access/access.express.mdw');
app.use(accessMdw);

const mainRouter = require('./route.express');
app.use(mainRouter);

module.exports = app;
