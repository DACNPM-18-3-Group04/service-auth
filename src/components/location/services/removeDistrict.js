const DistrictRepositories = require("../repository");

const removeDistrict = async (id) => {
  const ok = await DistrictRepositories.removeDistrict(id);
  return ok;
};

module.exports = removeDistrict;
