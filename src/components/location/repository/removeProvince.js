const Province = require("../../../models/province");

const removeProvince = async (_id) => {
  const p = await Province.deleteOne({ _id });

  return p.acknowledged;
};

module.exports = removeProvince;
