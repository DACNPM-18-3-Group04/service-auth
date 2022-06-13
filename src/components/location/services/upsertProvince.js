const DistrictRepositories = require("../repository");

const upsertProvince = async ({ id, name }) => {
  if (!name) throw new UserInputError("Params should not be empty");

  const p = await DistrictRepositories.upsertProvince({
    id: id,
    name: name,
  });
  return p;
};

module.exports = upsertProvince;
