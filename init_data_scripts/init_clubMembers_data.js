const mongoose = require("mongoose");
const path = require("path");

// Đường dẫn tới thư mục models
const modelsDir = path.join(__dirname, "../src/models");
const ClubMember = require(path.join(modelsDir, "clubMember.model"));

// Kết nối đến MongoDB
require(path.join(__dirname, "../src/common/connectMG"));

const clubMembersData = [
  {
    memberName: "John Doe",
    club: {
      clubId: new mongoose.Types.ObjectId(),
      clubName: "Club A",
    },
    status: true,
    dateTime: new Date(),
  },
  {
    memberName: "Lucy",
    club: {
      clubId: new mongoose.Types.ObjectId(),
      clubName: "Club B",
    },
    status: true,
    dateTime: new Date(),
  },
  // Thêm nhiều club members khác nếu cần
];

async function initClubMembersData() {
  try {
    await ClubMember.insertMany(clubMembersData);
    console.log("Club members data initialized successfully");
  } catch (error) {
    console.error("Error initializing club members data:", error.message);
  } finally {
    mongoose.disconnect();
  }
}

initClubMembersData();
