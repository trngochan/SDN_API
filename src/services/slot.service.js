const Slot = require('../models/Slot');

class SlotService {
    async getAllSlots() {
        try {
            const slots = await Slot.find();
            return slots;
        } catch (error) {
            throw error;
        }
    }

    async createSlot(newSlot) {
        try {
            const savedSlot = await newSlot.save();
            return savedSlot;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new SlotService();
