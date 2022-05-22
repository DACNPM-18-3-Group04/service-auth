const Province = require("../../../models/province");

const getAllProvinces = async () => {
  const docs = await Province.find({}).lean();
  return docs.map((d) => ({ ...d, id: d._id }));
};

module.exports = getAllProvinces;
