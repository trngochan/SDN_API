const mongoose = require("mongoose");

const transactionHistoryPointSchema = new mongoose.Schema({
  walletId: { type: mongoose.Schema.Types.ObjectId },
  clubMemSlotId: { type: mongoose.Schema.Types.ObjectId },
  initialPoint: { type: Number, required: true },
  transactionPointId: { type: mongoose.Schema.Types.ObjectId },
  transactionPoint: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

const TransactionHistoryPoint = mongoose.model(
  "TransactionHistoryPoint",
  transactionHistoryPointSchema
);

module.exports = TransactionHistoryPoint;
