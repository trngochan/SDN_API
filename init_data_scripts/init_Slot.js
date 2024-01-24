const mongoose = require("mongoose");
const path = require("path");

// Đường dẫn
const modelsDir = path.join(__dirname, "../src/models");
const slot = require(path.join(modelsDir, "slot.model"));

// Kết nối đến MongoDB
require(path.join(__dirname, "../src/common/connectMG"));

const slotData = [
    { name: 'Slot 1', startTime: new Date(), endTime: new Date(), memberPostId: 1, currentMember: 'Member A', requiredMember: 'Member B', yardId: 101, yardName: 'Yard A', status: true, dateTime: new Date() },
    { name: 'Slot 2', startTime: new Date(), endTime: new Date(), memberPostId: 2, currentMember: 'Member C', requiredMember: 'Member D', yardId: 102, yardName: 'Yard B', status: false, dateTime: new Date() },
];

async function initSlot() {
    try {
        // Xóa tất cả dữ liệu hiện tại trong bảng
        await slot.deleteMany();

        // Thêm dữ liệu mẫu
        await slot.insertMany(slotData);

        console.log('Dữ liệu đã được khởi tạo thành công.');
    } catch (error) {
        console.error('Lỗi khi khởi tạo dữ liệu:', error);
    } finally {
        mongoose.disconnect();
    }
}

initSlot();
