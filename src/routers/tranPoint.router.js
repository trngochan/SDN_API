const express = require("express");
const router = express.Router();
const TranPointrController = require("../controllers/tranPoint.controller");

// Lấy danh sách tất cả thành viên
router.get("/tranpoints", TranPointrController.get_all_tranpoints);

// Tạo mới thành viên
router.post("/tranpoints", TranPointrController.create_tranpoint);

// Lấy thông tin của một thành viên cụ thể
router.get("/tranpoints/:id", TranPointrController.get_tranpoint);

// Cập nhật thông tin của một thành viên
router.put("/tranpoints/:id", TranPointrController.update_tranpoint);

// Xóa một thành viên
router.delete("/tranpoints/:id", TranPointrController.delete_tranpoint);

module.exports = router;
