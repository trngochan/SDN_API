const mongoose = require("mongoose");

const ClubMemberSchema = new mongoose.Schema({
  memberName: { type: String },
  club: {
    clubId: { type: mongoose.Schema.Types.ObjectId },
    clubName: { type: String },
  },
  status: { type: Boolean },
  dateTime: { type: Date },
});

const ClubMember = mongoose.model("ClubMember", ClubMemberSchema);

module.exports = ClubMember;
