const DistrictRepositories = require("../repository");

const getAllDistricts = async () => {
  const docs = await DistrictRepositories.getAllDistricts();
  return docs;
};

module.exports = getAllDistricts;
