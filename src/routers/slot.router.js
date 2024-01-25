const express = require("express");
const router = express.Router();
const SlotController = require("../controllers/slot.controller");

// Get all slots
router.get("/slots", SlotController.get_all_slots);

// Create a new slot
router.post("/slots", SlotController.create_slot);

// Get information about a specific slot
router.get("/slots/:id", SlotController.get_slot);

// Update information of a slot
router.put("/slots/:id", SlotController.update_slot);

// Delete a slot
router.delete("/slots/:id", SlotController.delete_slot);

module.exports = router;
