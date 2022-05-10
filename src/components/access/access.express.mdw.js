const config = require('../../configs');

const { secretKey, authHeader } = config.service;

const auth = (req, res, next) => {
  const authHeaderKey = req.header(authHeader);

  if (!authHeaderKey || authHeaderKey !== secretKey) {
    return res.status(401).json({
      success: false,
      data: {},
      message: 'Unauthorized access',
    });
  }
  next();
};

module.exports = auth;
