const AuthService = require('./services');

const handleCheckAuthorization = (req, res) => {
  const params = {
    userId: req.body.userID,
  };

  AuthService.isAuthorized(params)
    .then((data) => {
      const { authorized } = data;
      res.status(200).json({
        success: true,
        data: {
          authorized: authorized,
        },
        message: 'Retrieved successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        data: {
          authorized: false,
        },
        message: err.message,
      });
    });
};

const handleBanUser = (req, res) => {
  const params = {
    userId: req.body.userID,
  };

  AuthService.banUser(params)
    .then((data) => {
      const { success } = data;
      res.status(201).json({
        success: true,
        data: {
          success: success,
        },
        message: 'Banned successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        data: {
          success: false,
        },
        message: err.message,
      });
    });
};

const handleUnbanUser = (req, res) => {
  const params = {
    userId: req.body.userID,
  };

  AuthService.unbanUser(params)
    .then((data) => {
      const { success } = data;
      res.status(201).json({
        success: true,
        data: {
          success: success,
        },
        message: 'Unbanned successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        data: {
          success: false,
        },
        message: err.message,
      });
    });
};

const AuthController = {
  handleCheckAuthorization,
  handleBanUser,
  handleUnbanUser,
};

module.exports = AuthController;
