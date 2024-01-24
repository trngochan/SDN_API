const mongoose = require('mongoose');

const clubMemSlotSchema = new mongoose.Schema({
    clubMemberId: { type: Number, required: true },
    slotId: { type: Number, required: true },
    dateTime: Date,
    transactionPoint: { type: Number, required: true },
    status: { type: Boolean, required: true }
});

const ClubMemSlot = mongoose.model('ClubMemSlot', clubMemSlotSchema);

module.exports = ClubMemSlot;