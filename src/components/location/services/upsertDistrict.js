const DistrictRepositories = require("../repository");

const upsertDistrict = async ({ id, dtName, provinceId }) => {
  if (!dtName) throw new UserInputError("Params should not be empty");

  const p = await DistrictRepositories.getProvinceById(provinceId);
  if (!p) throw new UserInputError("Invalid province id");

  const d = await DistrictRepositories.upsertDistrict({
    id: id,
    name: dtName,
    provinceId: provinceId,
  });
  return d;
};

module.exports = upsertDistrict;
