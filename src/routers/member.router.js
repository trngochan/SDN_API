const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/member.controller");

// Lấy danh sách tất cả thành viên
router.get("/members", MemberController.get_all_members);

// Tạo mới thành viên
router.post("/members", MemberController.create_member);

// Lấy thông tin của một thành viên cụ thể
router.get("/members/:id", MemberController.get_member);

// Cập nhật thông tin của một thành viên
router.put("/members/:id", MemberController.update_member);

// Xóa một thành viên
router.delete("/members/:id", MemberController.delete_member);

module.exports = router;
