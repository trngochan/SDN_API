const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define Area Schema
const areaSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  status: { type: Boolean },
  dateTime: { type: Date },
});
const Area = mongoose.model("Area", areaSchema);
module.exports = Area;
