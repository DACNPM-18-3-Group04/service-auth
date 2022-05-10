const grpc = require("@grpc/grpc-js");

const Credential = grpc.ServerCredentials.createInsecure();

module.exports = Credential;
