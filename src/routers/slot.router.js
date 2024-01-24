const express = require('express');
const SlotController = require('../controllers/slotController');

const router = express.Router();

// Định nghĩa các endpoint API
router.get('/slots', SlotController.getAllSlots);
router.post('/slots', SlotController.createSlot);
router.put('/slots/:id', SlotController.updateSlot);
router.delete('/slots/:id', SlotController.deleteSlot);

module.exports = router;
