const Province = require("../../../models/province");

const getProvinceById = async (provinceId) => {
  const p = await Province.findById(provinceId).lean();
  return { ...p, id: p._id };
};

module.exports = getProvinceById;
