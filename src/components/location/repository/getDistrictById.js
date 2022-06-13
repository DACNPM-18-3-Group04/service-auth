const District = require("../../../models/district");

const getDistrictById = async (id) => {
  const district = await District.findById(id).lean();
  return { ...district, id: district._id };
};

module.exports = getDistrictById;
