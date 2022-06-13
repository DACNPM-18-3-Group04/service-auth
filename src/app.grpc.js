const grpc = require("@grpc/grpc-js");

const protoLoader = require("@grpc/proto-loader");
const protoLoaderOptions = require("./configs/protoloader.config");
const PROTO_PATH = "./src/configs/protos/index.proto";

const AuthAppService = require("./components/auth/auth.appservice");

const db = require("./configs/database.config");
const { DistrictServiceRPC, ProvinceServiceRPC } = require("./components/location/location.appservice");

const authPackageDefinition = protoLoader.loadSync(PROTO_PATH, protoLoaderOptions);
const protoDefs = grpc.loadPackageDefinition(authPackageDefinition);

const app = new grpc.Server();
app.addService(protoDefs.auth.AuthService.service, AuthAppService);
app.addService(protoDefs.location.DistrictService.service, DistrictServiceRPC);
app.addService(protoDefs.location.ProvinceService.service, ProvinceServiceRPC);

db.connect();

module.exports = app;
