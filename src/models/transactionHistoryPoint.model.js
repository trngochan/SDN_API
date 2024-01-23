const mongoose = require("mongoose");

const transactionHistoryPointSchema = new mongoose.Schema({
  walletId: { type: mongoose.Schema.Types.ObjectId, required: true },
  clubMemSlotId: { type: mongoose.Schema.Types.ObjectId, required: true },
  initialPoint: { type: Number, required: true },
  transactionPointId: { type: mongoose.Schema.Types.ObjectId, required: true },
  transactionPoint: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

const TransactionHistoryPoint = mongoose.model(
  "TransactionHistoryPoint",
  transactionHistoryPointSchema
);

module.exports = TransactionHistoryPoint;
