const grpc = require('@grpc/grpc-js');

const protoLoader = require('@grpc/proto-loader')
const protoLoaderOptions = require('./configs/protoloader.config');
const AUTH_PROTO_PATH = './src/configs/protos/authService.proto';

const AuthAppService = require('./components/auth/auth.appservice');

const db = require('./configs/database.config');

const authPackageDefinition = protoLoader.loadSync(AUTH_PROTO_PATH, protoLoaderOptions);
const authProto = grpc.loadPackageDefinition(authPackageDefinition);

const app = new grpc.Server();
app.addService(authProto.AuthService.service, AuthAppService);

db.connect();

module.exports = app;
