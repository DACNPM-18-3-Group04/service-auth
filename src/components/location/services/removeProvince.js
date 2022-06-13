const DistrictRepositories = require("../repository");

const removeProvince = async (id) => {
  const ok = await DistrictRepositories.removeProvince(id);
  return ok;
};

module.exports = removeProvince;
