const mongoose = require("mongoose");

const ClubMemberSlotSchema = new mongoose.Schema({
  clubMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
  slotId: { type: mongoose.Schema.Types.ObjectId, required: true },
  dateTime: { type: Date },
  transactionPoint: { type: Number },
  status: { type: Boolean },
});

const ClubMemberSlot = mongoose.model("ClubMemberSlot", ClubMemberSlotSchema);

module.exports = ClubMemberSlot;
