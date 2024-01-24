const ClubMemSlotService = require('../services/clubMemSlotService');
const ClubMemSlot = require('../models/ClubMemSlot');

class ClubMemSlotController {
    async getAllClubMemSlots(req, res) {
        try {
            const clubMemSlots = await ClubMemSlotService.getAllClubMemSlots();
            res.json(clubMemSlots);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getClubMemSlotById(req, res) {
        const id = req.params.id;
        try {
            const clubMemSlot = await ClubMemSlotService.getClubMemSlotById(id);
            res.json(clubMemSlot);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createClubMemSlot(req, res) {
        try {
            const newClubMemSlot = new ClubMemSlot(req.body);
            const savedClubMemSlot = await ClubMemSlotService.createClubMemSlot(newClubMemSlot);
            res.json(savedClubMemSlot);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateClubMemSlot(req, res) {
        const id = req.params.id;
        try {
            const updatedClubMemSlot = await ClubMemSlotService.updateClubMemSlot(id, req.body);
            res.json(updatedClubMemSlot);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteClubMemSlot(req, res) {
        const id = req.params.id;
        try {
            const deletedClubMemSlot = await ClubMemSlotService.deleteClubMemSlot(id);
            res.json(deletedClubMemSlot);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new ClubMemSlotController();
