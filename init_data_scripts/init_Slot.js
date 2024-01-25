const mongoose = require("mongoose");
const path = require("path");

const modelsDir = path.join(__dirname, "../src/models");
const Slot = require(path.join(modelsDir, "slot.model"));

require(path.join(__dirname, "../src/common/connectMG"));

const slotsData = [
  {
    clubMemberId: new mongoose.Types.ObjectId(),
    slotId: new mongoose.Types.ObjectId(),
    dateTime: new Date("2024-01-01T10:00:00.000Z"),
    transactionPoint: 10,
    status: true,
  },
  {
    clubMemberId: new mongoose.Types.ObjectId(),
    slotId: new mongoose.Types.ObjectId(),
    dateTime: new Date("2024-01-02T14:30:00.000Z"),
    transactionPoint: 8,
    status: false,
  },
  // Add more slots as needed
];

async function initSlotsData() {
  try {
    await Slot.insertMany(slotsData);
    console.log("Slots data initialized successfully");
  } catch (error) {
    console.error("Error initializing slots data:", error.message);
  } finally {
    mongoose.disconnect();
  }
}

initSlotsData();
