const BannedUser = require('../../../models/bannedUser');

const getbyUserId = async (userId = '') => {
  const user = BannedUser.findOne({
    userId: userId,
  });

  return user;
}

const create = async ({ userId = '' }) => {
  const filter = {
    userId: userId,
  }

  const params = {
    userId: userId
  }
  
  return BannedUser.findOneAndUpdate(filter, params, {
    new: true,
    upsert: true // Make this update into an upsert
  });
}

const deleteByUserId = async (userId = '') => {
  return BannedUser.delete({
    userId: userId,
  })
}

const AuthRepository = {
  getbyUserId,
  create,
  deleteByUserId,
}

module.exports = AuthRepository;
