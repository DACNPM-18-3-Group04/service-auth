const AuthRepository = require("../repository");
const { handle, isEmpty } = require("../../../utils");

const unbanUser = async ({ userId }) => {
  if (isEmpty(userId)) {
    throw new Error("Empty userId given");
  }

  const formattedUserId = `${userId}`;
  const [_, errUser] = await handle(
    AuthRepository.deleteByUserId(formattedUserId)
  );

  if (errUser) {
    throw errUser;
  }

  return {
    success: true,
  };
};

module.exports = unbanUser;
