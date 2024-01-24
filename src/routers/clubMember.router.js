const express = require("express");
const router = express.Router();
const ClubMemberController = require("../controllers/clubMember.controller");

// Lấy danh sách tất cả thành viên câu lạc bộ
router.get("/clubMembers", ClubMemberController.get_all_club_members);

// Tạo mới thành viên câu lạc bộ
router.post("/clubMembers", ClubMemberController.create_club_member);

// Lấy thông tin của một thành viên câu lạc bộ cụ thể
router.get("/clubMembers/:id", ClubMemberController.get_club_member);

// Cập nhật thông tin của một thành viên câu lạc bộ
router.put("/clubMembers/:id", ClubMemberController.update_club_member);

// Xóa một thành viên câu lạc bộ
router.delete("/clubMembers/:id", ClubMemberController.delete_club_member);

module.exports = router;
