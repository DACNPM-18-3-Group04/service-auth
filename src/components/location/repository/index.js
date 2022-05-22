const getAllDistricts = require("./getAllDistricts");
const getAllProvinces = require("./getAllProvinces");
const getDistrictById = require("./getDistrictById");
const getProvinceById = require("./getProvinceById");
const removeDistrict = require("./removeDistrict");
const removeProvince = require("./removeProvince");
const upsertDistrict = require("./upsertDistrict");
const upsertProvince = require("./upsertProvince");

const DistrictRepositories = {
  getAllDistricts,
  getAllProvinces,
  getDistrictById,
  getProvinceById,
  removeDistrict,
  removeProvince,
  upsertDistrict,
  upsertProvince,
};

module.exports = DistrictRepositories;
