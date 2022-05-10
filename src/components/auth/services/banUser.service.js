const AuthRepository = require('../repository');
const { handle, isEmpty } = require('../../../utils');

const banUser = async ({ userId }) => {
  if (isEmpty(userId)) {
    throw new Error('Empty userId given');
  }

  const formattedUserId = `${userId}`;
  const paramsCreate = {
    userId: formattedUserId,
  }
  const [_, errUser] = await handle(AuthRepository.create(paramsCreate));
  
  if (errUser) {
    throw errUser;
  }

  // console.log(user);
  return {
    success: true,
  }
}

module.exports = banUser;
