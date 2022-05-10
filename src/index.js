const configs = require('./configs');
//gRPC
// const ServerCredentials = require('./configs/credential.config');

// const server = require('./app.grpc');

// const bindCallback = (error, port) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   server.start();
//   console.log(`Server started. Listening on ${port}`);
// };

// server.bindAsync(
//   `0.0.0.0:${configs.service.port}`,
//   ServerCredentials,
//   bindCallback,
// );

//REST
const server = require('./app.express');
const PORT = configs.service.port;
server.listen(PORT, () => {
  console.log(`Server started. Listening on ${PORT}`);
});
