const express = require('express');
const ClubMemSlotController = require('../controllers/clubMemSlotController');

const router = express.Router();

// Định nghĩa các endpoint API
router.get('/clubmemslots', ClubMemSlotController.getAllClubMemSlots);
router.get('/clubmemslots/:id', ClubMemSlotController.getClubMemSlotById);
router.post('/clubmemslots', ClubMemSlotController.createClubMemSlot);
router.put('/clubmemslots/:id', ClubMemSlotController.updateClubMemSlot);
router.delete('/clubmemslots/:id', ClubMemSlotController.deleteClubMemSlot);

module.exports = router;
