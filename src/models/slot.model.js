const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    name: { type: String, required: true },
    startTime: { type: Date },
    endTime: { type: Date },
    memberPostId: { type: Number, required: true },
    currentMember: { type: String },
    requiredMember: { type: String },
    yardId: { type: Number, required: true },
    yardName: { type: String },
    status: { type: Boolean },
    dateTime: { type: Date }
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;
