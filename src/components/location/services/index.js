const getAllDistricts = require("./getAllDistricts");
const getAllProvinces = require("./getAllProvinces");
const getDistrictById = require("./getDistrictById");
const getProvinceById = require("./getProvinceById");
const removeDistrict = require("./removeDistrict");
const removeProvince = require("./removeProvince");
const upsertDistrict = require("./upsertDistrict");
const upsertProvince = require("./upsertProvince");

const DistrictServices = {
  getAllDistricts,
  getAllProvinces,
  getDistrictById,
  getProvinceById,
  upsertDistrict,
  upsertProvince,
  removeDistrict,
  removeProvince,
};

module.exports = DistrictServices;
