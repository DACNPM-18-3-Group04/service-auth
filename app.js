const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { passport } = require('./configs/passport');
const db = require('./configs/database');
// Test DB
db.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    db.sync({ alter: true }).catch((err) =>
      console.log(`Sync error: ${err.message}`),
    );
  })
  .catch((err) => console.log('Database connection error: ', err));

const ErrorMdw = require('./components/errors/error.middleware');
const indexRouter = require('./routes/index.route');

const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ErrorMdw.handleBadJSONParseError);

app.use('/', indexRouter);

module.exports = app;
