const configs = require('./configs');
const ServerCredentials = require('./configs/credential.config');

const server = require('./app');

const bindCallback = (error, port) => {
  if (error) {
    console.log(error);
    return;
  }
  server.start();
  console.log(`Server started. Listening on ${port}`);
}

server.bindAsync(
  `0.0.0.0:${configs.service.port}`,
  ServerCredentials,
  bindCallback
);
