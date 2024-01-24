const mongoose = require('mongoose');

const yardSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    sportId: { type: Number, required: true },
    sportName: { type: String },
    areaId: { type: Number, required: true },
    areaName: { type: String },
    status: { type: Boolean },
    dateTime: { type: Date },
}, { timestamps: true });

yardSchema.index({ id: 1 }, { unique: true });

const Yard = mongoose.model('Yard', yardSchema);

module.exports = Yard;
