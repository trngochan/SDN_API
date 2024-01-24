const express = require("express");
const router = express.Router();
const ClubController = require("../controllers/club.controller");

// Lấy danh sách tất cả câu lạc bộ
router.get("/clubs", ClubController.get_all_clubs);

// Tạo mới câu lạc bộ
router.post("/clubs", ClubController.create_club);

// Lấy thông tin của một câu lạc bộ cụ thể
router.get("/clubs/:id", ClubController.get_club);

// Cập nhật thông tin của một câu lạc bộ
router.put("/clubs/:id", ClubController.update_club);

// Xóa một câu lạc bộ
router.delete("/clubs/:id", ClubController.delete_club);

module.exports = router;
