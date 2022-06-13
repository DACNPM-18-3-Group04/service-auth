const District = require("../../../models/district");

const getAllDistricts = async () => {
  const docs = await District.find({}).lean();
  return docs.map((d) => ({ ...d, id: d._id }));
};

module.exports = getAllDistricts;
