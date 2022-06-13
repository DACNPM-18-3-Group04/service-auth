const configs = require("./configs");
//gRPC
const ServerCredentials = require("./configs/credential.config");

const grpcServer = require("./app.grpc");

const bindCallback = (error, port) => {
  if (error) {
    console.log(error);
    return;
  }
  grpcServer.start();
  console.log(`grpcServer started. Listening on ${port}`);
};

grpcServer.bindAsync(`0.0.0.0:${configs.service.grpcPort}`, ServerCredentials, bindCallback);

//REST
const server = require("./app.express");
const PORT = configs.service.port;
server.listen(PORT, () => {
  console.log(`Server started. Listening on ${PORT}`);
});
