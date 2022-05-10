const config = require("../../configs");
const secretKey = config.service.secretKey;

const isAuthorizedCall = (call) => {
  // console.log(call.metadata);
  const accessKey = `${call.metadata.get(config.service.authHeader)[0]}`;
  // console.log(accessKey);
  return secretKey.toUpperCase() === accessKey.toUpperCase();
};

module.exports = {
  isAuthorizedCall,
};
