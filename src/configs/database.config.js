const mongoose = require('mongoose');

const config = require('.');

//Connect to DB
const connect = () => {
  mongoose
    .connect(config.database.connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connect to DB successfully');
    });
};

module.exports = {
  connect,
};
