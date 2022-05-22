const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema(
  {
    provinceId: mongoose.Types.ObjectId,
    name: String,
  },
  { timestamps: false }
);

const District = mongoose.model("dupdistricts", schema);

module.exports = District;
