const mongoose = require("mongoose");
const path = require("path");

// Đường dẫn tới thư mục models
const modelsDir = path.join(__dirname, "../src/models");
const Club = require(path.join(modelsDir, "club.model"));

// Kết nối đến MongoDB
require(path.join(__dirname, "../src/common/connectMG"));

const clubsData = [
  {
    name: "Club A",
    description: "Description for Club A",
    countMember: 10,
    sport: {
      sportId: new mongoose.Types.ObjectId(),
      sportName: "Football",
    },
    status: true,
    dateTime: new Date(),
  },
  {
    name: "Club B",
    description: "Description for Club B",
    countMember: 10,
    sport: {
      sportId: new mongoose.Types.ObjectId(),
      sportName: "Cooking",
    },
    status: true,
    dateTime: new Date(),
  },
  // Thêm nhiều clubs khác nếu cần
];

async function initClubsData() {
  try {
    await Club.insertMany(clubsData);
    console.log("Clubs data initialized successfully");
  } catch (error) {
    console.error("Error initializing clubs data:", error.message);
  } finally {
    mongoose.disconnect();
  }
}

initClubsData();
