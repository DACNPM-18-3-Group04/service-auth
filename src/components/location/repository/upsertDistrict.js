const District = require("../../../models/district");

const upsertDistrict = async ({ id, name, provinceId }) => {
  const filter = id ? { _id: id } : { name: name, provinceId: provinceId };
  const doc = {
    name: name,
    provinceId: provinceId,
  };
  const d = await District.updateOne(filter, doc, { upsert: true });

  if (d.acknowledged) {
    if (d.upsertedCount) return { id: d.upsertedId, name };
    if (d.modifiedCount) return { id, name };
    if (d.matchedCount) throw new Error("Nothing has changed");
  }
  throw new Error("Something went wrong");
};

module.exports = upsertDistrict;
