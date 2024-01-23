const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String },
  gender: { type: String },
  buildingId: { type: Number, required: true },
  buildingName: { type: String },
  phoneNumber: { type: Number },
  status: { type: Boolean, default: true },
  dateTime: { type: Date, default: Date.now },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
