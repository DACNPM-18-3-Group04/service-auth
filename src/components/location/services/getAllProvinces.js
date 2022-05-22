const DistrictRepositories = require("../repository");

const getAllProvinces = async () => {
  const docs = await DistrictRepositories.getAllProvinces();
  return docs;
};

module.exports = getAllProvinces;
