const DistrictRepositories = require("../repository");

const getDistrictById = async (id) => {
  const d = await DistrictRepositories.getDistrictById(id);
  if (!d) throw new Error("Data is not available");
  return d;
};

module.exports = getDistrictById;
