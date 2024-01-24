const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  countMember: { type: Number },
  sport: {
    sportId: { type: mongoose.Schema.Types.ObjectId },
    sportName: { type: String }
  },
  status: { type: Boolean },
  dateTime: { type: Date }
});

const Club = mongoose.model("Club", ClubSchema);

module.exports = Club;