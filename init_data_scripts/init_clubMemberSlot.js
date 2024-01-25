const mongoose = require("mongoose");
const path = require("path");

const modelsDir = path.join(__dirname, "../src/models");
const ClubMemSlot = require(path.join(modelsDir, "clubMemSlot.model"));

require(path.join(__dirname, "../src/common/connectMG"));

const clubMemSlotsData = [
  {
    clubMemberId: new mongoose.Types.ObjectId(),
    slotId: new mongoose.Types.ObjectId(),
    dateTime: new Date("2024-01-05T09:15:00.000Z"),
    transactionPoint: 12,
    status: true,
  },
  {
    clubMemberId: new mongoose.Types.ObjectId(),
    slotId: new mongoose.Types.ObjectId(),
    dateTime: new Date("2024-01-07T16:45:00.000Z"),
    transactionPoint: 15,
    status: true,
  },
  // Add more clubMemSlots as needed
];

async function initClubMemSlotsData() {
  try {
    await ClubMemSlot.insertMany(clubMemSlotsData);
    console.log("ClubMemSlots data initialized successfully");
  } catch (error) {
    console.error("Error initializing clubMemSlots data:", error.message);
  } finally {
    mongoose.disconnect();
  }
}

initClubMemSlotsData();
