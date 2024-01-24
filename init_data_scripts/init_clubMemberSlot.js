const mongoose = require("mongoose");
const path = require("path");

// Đường dẫn
const modelsDir = path.join(__dirname, "../src/models");
const ClubMemberSlot = require(path.join(modelsDir, "clubMemSlot.model"));

// Kết nối đến MongoDB
require(path.join(__dirname, "../src/common/connectMG"));

const ClubMemSlot = [
    { clubMemberId: 1, slotId: 101, dateTime: new Date(), transactionPoint: 50, status: true },
    { clubMemberId: 2, slotId: 102, dateTime: new Date(), transactionPoint: 30, status: false },
];

async function initClubMemSlot() {
    try {
        // Xóa tất cả dữ liệu hiện tại trong bảng
        await ClubMemberSlot.deleteMany();

        // Thêm dữ liệu mẫu
        await ClubMemberSlot.insertMany(ClubMemSlot);

        console.log('Dữ liệu đã được khởi tạo thành công.');
    } catch (error) {
        console.error('Lỗi khi khởi tạo dữ liệu:', error);
    } finally {
        mongoose.disconnect();
    }
}

initClubMemSlot();
