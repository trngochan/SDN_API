const mongoose = require("mongoose");

const tranPointSchema = new mongoose.Schema({
  point: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

const TranPoint = mongoose.model("TranPoint", tranPointSchema);

module.exports = TranPoint;
