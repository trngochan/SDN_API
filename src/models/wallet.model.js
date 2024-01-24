const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    memberId: { type: Number, required: true },
    memberName: { type: String },
    point: { type: Number },
    status: { type: Boolean },
    dateTime: { type: Date },
    column: { type: Number },
}, { timestamps: true });

walletSchema.index({ id: 1 }, { unique: true });

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
