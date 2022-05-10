const AuthService = require('./services');

const isAuthorized = (call, callback) => {
  const req = call.request;
  const params = {
    userId: req.userID,
  }

  AuthService.isAuthorized(params)
  .then((data) => {
    const authorized = data.authorized;
    callback(null, { authorized: authorized, })
  })
  .catch((err) => {
    console.log(err);
    callback(null, { authorized: false, })
  })
}

const banUser = (call, callback) => {
  const req = call.request;
  const params = {
    userId: req.userID,
  }

  AuthService.banUser(params)
  .then((data) => {
    const success = data.success;
    callback(null, { success: success, })
  })
  .catch((err) => {
    console.log(err);
    callback(null, { success: false, })
  })
}

const unbanUser = (call, callback) => {
  const req = call.request;
  const params = {
    userId: req.userID,
  }

  AuthService.unbanUser(params)
  .then((data) => {
    const success = data.success;
    callback(null, { success: success, })
  })
  .catch((err) => {
    console.log(err);
    callback(null, { success: false, })
  })
}

const AuthAppService = {
  isAuthorized,
  banUser,
  unbanUser,
}

module.exports = AuthAppService;
