const express = require("express");
const router = express.Router();
const YardController = require("../controllers/yard.controller");

// Lấy danh sách tất cả sân
router.get("/yards", YardController.get_all_yards);

// Tạo mới sân
router.post("/yards", YardController.create_yard);

// Lấy thông tin của một sân cụ thể
router.get("/yards/:id", YardController.get_yard);

// Cập nhật thông tin của một sân
router.put("/yards/:id", YardController.update_yard);

// Xóa một sân
router.delete("/yards/:id", YardController.delete_yard);

module.exports = router;
