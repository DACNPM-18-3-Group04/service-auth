const isAuthorized = require('./isAuthorized.service');
const banUser = require('./banUser.service');
const unbanUser = require('./unbanUser.service');

const AuthService = {
  isAuthorized,
  banUser,
  unbanUser,
};

module.exports = AuthService;
