const ClubMemSlot = require('../models/ClubMemSlot');

class ClubMemSlotService {
    async getAllClubMemSlots() {
        try {
            const clubMemSlots = await ClubMemSlot.find();
            return clubMemSlots;
        } catch (error) {
            throw error;
        }
    }

    async getClubMemSlotById(id) {
        try {
            const clubMemSlot = await ClubMemSlot.findById(id);
            return clubMemSlot;
        } catch (error) {
            throw error;
        }
    }

    async createClubMemSlot(newClubMemSlot) {
        try {
            const savedClubMemSlot = await newClubMemSlot.save();
            return savedClubMemSlot;
        } catch (error) {
            throw error;
        }
    }

    async updateClubMemSlot(id, updatedClubMemSlot) {
        try {
            const clubMemSlot = await ClubMemSlot.findByIdAndUpdate(id, updatedClubMemSlot, { new: true });
            return clubMemSlot;
        } catch (error) {
            throw error;
        }
    }

    async deleteClubMemSlot(id) {
        try {
            const deletedClubMemSlot = await ClubMemSlot.findByIdAndRemove(id);
            return deletedClubMemSlot;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ClubMemSlotService();
