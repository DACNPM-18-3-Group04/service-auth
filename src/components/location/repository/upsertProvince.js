const Province = require("../../../models/province");

const upsertProvince = async ({ id, name }) => {
  const filter = id ? { _id: id } : { name: name };
  const doc = { name: name };
  const p = await Province.updateOne(filter, doc, { upsert: true });

  if (p.acknowledged) {
    if (p.upsertedCount) return { id: p.upsertedId, name };
    if (p.modifiedCount) return { id, name };
    if (p.matchedCount) throw new Error("Nothing has changed");
  }
  throw new Error("Something went wrong");
};

module.exports = upsertProvince;
