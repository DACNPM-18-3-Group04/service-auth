const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: false }
);

const Province = mongoose.model("provinces", schema);

module.exports = Province;
