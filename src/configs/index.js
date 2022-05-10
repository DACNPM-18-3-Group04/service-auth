require("dotenv").config();

const Default = require("./default");

module.exports = {
  service: {
    version: "v1",
    authHeader: "authorization", // All lowercased
    port: process.env.PORT || Default.service.port,
    secretKey: process.env.SECRET_KEY || Default.service.secretKey,
  },

  database: {
    connectionURL:
      process.env.DB_CONNECTION_URL || Default.database.connectionURL,
  },
};
