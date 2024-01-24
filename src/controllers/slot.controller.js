const SlotService = require('../services/slotService');
const Slot = require('../models/Slot');

class SlotController {
    async getAllSlots(req, res) {
        try {
            const slots = await SlotService.getAllSlots();
            res.json(slots);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createSlot(req, res) {
        try {
            const newSlot = new Slot(req.body);
            const savedSlot = await SlotService.createSlot(newSlot);
            res.json(savedSlot);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateSlot(req, res) {
        try {
            const slotId = req.params.id;
            const updatedSlot = await Slot.findByIdAndUpdate(slotId, req.body, { new: true });
            res.json(updatedSlot);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteSlot(req, res) {
        try {
            const slotId = req.params.id;
            const deletedSlot = await Slot.findByIdAndRemove(slotId);
            res.json(deletedSlot);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new SlotController();
