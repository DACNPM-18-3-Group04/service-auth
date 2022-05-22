const District = require("../../../models/district");

const removeDistrict = async (_id) => {
  const d = await District.deleteOne({ _id });

  return d.acknowledged;
};

module.exports = removeDistrict;
