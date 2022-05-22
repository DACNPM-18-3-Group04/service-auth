const DefaultConfig = {
  service: {
    port: '3000',
    grpc_port: '50051',
    secretKey: 'DEFAULT_SECRET_KEY',
  },
  database: {
    connectionURL:
      'mongodb+srv://<username>:<password>@cluster0.lvrjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  },
};

module.exports = DefaultConfig;
