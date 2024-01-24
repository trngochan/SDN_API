const mongoose = require('mongoose');
const ClubMemSlot = require('./models/ClubMemSlot');

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/SDN_API', { useNewUrlParser: true, useUnifiedTopology: true });

// Dữ liệu mẫu
const ClubMemSlot = [
    { clubMemberId: 1, slotId: 101, dateTime: new Date(), transactionPoint: 50, status: true },
    { clubMemberId: 2, slotId: 102, dateTime: new Date(), transactionPoint: 30, status: false },
    // Thêm dữ liệu mẫu khác nếu cần
];

async function init() {
    try {
        // Xóa tất cả dữ liệu hiện tại trong bảng
        await ClubMemSlot.deleteMany();

        // Thêm dữ liệu mẫu
        await ClubMemSlot.insertMany(ClubMemSlot);

        console.log('Dữ liệu đã được khởi tạo thành công.');
    } catch (error) {
        console.error('Lỗi khi khởi tạo dữ liệu:', error);
    } finally {
        // Đóng kết nối đến MongoDB khi hoàn thành
        mongoose.disconnect();
    }
}

// Gọi hàm khởi tạo
init();
