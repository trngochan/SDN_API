const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  clubMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
  slotId: { type: mongoose.Schema.Types.ObjectId, required: true },
  dateTime: { type: Date },
  transactionPoint: { type: Number },
  status: { type: Boolean },
});

const Slot = mongoose.model("Slot", SlotSchema);

module.exports = Slot;
