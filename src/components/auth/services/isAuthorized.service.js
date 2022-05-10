const AuthRepository = require('../repository');
const { handle, isEmpty } = require('../../../utils');

const isAuthorized = async ({ userId }) => {
  const formattedUserId = `${userId}`;
  const [user, errUser] = await handle(AuthRepository.getbyUserId(formattedUserId));
  if (errUser) {
    throw errUser;
  }

  // console.log(user);
  if (!isEmpty(user)) {
    return {
      authorized: false,
    }
  }

  return {
    authorized: true,
  }
}

module.exports = isAuthorized;
