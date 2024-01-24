const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    avatar: { type: String },
    status: { type: Boolean },
    dateTime: { type: Date },
}, { timestamps: true });

sportSchema.index({ id: 1 }, { unique: true });

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;
