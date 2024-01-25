const express = require("express");
const router = express.Router();
const ClubMemSlotController = require("../controllers/clubMemSlot.controller");

// Get all club member slots
router.get("/clubMemSlots", ClubMemSlotController.get_all_club_mem_slots);

// Create a new club member slot
router.post("/clubMemSlots", ClubMemSlotController.create_club_mem_slot);

// Get information about a specific club member slot
router.get("/clubMemSlots/:id", ClubMemSlotController.get_club_mem_slot);

// Update information of a club member slot
router.put("/clubMemSlots/:id", ClubMemSlotController.update_club_mem_slot);

// Delete a club member slot
router.delete("/clubMemSlots/:id", ClubMemSlotController.delete_club_mem_slot);

module.exports = router;
