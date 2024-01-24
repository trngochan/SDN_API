const mongoose = require('mongoose');
const Slot = require('./models/Slot');

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/SDN', { useNewUrlParser: true, useUnifiedTopology: true });

// Dữ liệu mẫu
const sampleData = [
    { name: 'Slot 1', startTime: new Date(), endTime: new Date(), memberPostId: 1, currentMember: 'Member A', requiredMember: 'Member B', yardId: 101, yardName: 'Yard A', status: true, dateTime: new Date() },
    { name: 'Slot 2', startTime: new Date(), endTime: new Date(), memberPostId: 2, currentMember: 'Member C', requiredMember: 'Member D', yardId: 102, yardName: 'Yard B', status: false, dateTime: new Date() },
    // Thêm dữ liệu mẫu khác nếu cần
];

async function init() {
    try {
        // Xóa tất cả dữ liệu hiện tại trong bảng
        await Slot.deleteMany();

        // Thêm dữ liệu mẫu
        await Slot.insertMany(sampleData);

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
