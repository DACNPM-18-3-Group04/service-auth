const DistrictRepositories = require("../repository");

const getProvinceById = async (provinceId) => {
  const p = await DistrictRepositories.getProvinceById(provinceId);
  if (!p) throw new Error("Data is not available");
  return p;
};

module.exports = getProvinceById;
