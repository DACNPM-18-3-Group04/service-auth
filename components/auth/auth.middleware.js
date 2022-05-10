const passport = require('passport');

const auth = async function (req, res) {
  const { body } = req;
  return passport.authenticate('jwt', { session: false }, (err, user) => {
    // console.log(user);
    if (err || !user) {
      return res.status(401).json({
        success: false,
        data: {},
        message: 'Không có quyền thực hiện hành động này',
      });
    }

    return res.status(200).json({
      ...user,
    });
  })({ ...req, headers: body.headers }, res);
};

module.exports = {
  auth,
};
