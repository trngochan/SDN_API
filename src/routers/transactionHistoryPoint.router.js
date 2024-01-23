const express = require("express");
const router = express.Router();
const TransactionHistoryPointController = require("../controllers/transactionHistoryPoint.controller");

// Lấy danh sách tất cả thành viên
router.get(
  "/trainpointhistorys",
  TransactionHistoryPointController.get_all_transactionhistorypoints
);

// Tạo mới thành viên
router.post(
  "/trainpointhistorys",
  TransactionHistoryPointController.create_transactionhistorypoint
);

// Lấy thông tin của một thành viên cụ thể
router.get(
  "/trainpointhistorys/:id",
  TransactionHistoryPointController.get_transactionhistorypoint
);

// Cập nhật thông tin của một thành viên
router.put(
  "/trainpointhistorys/:id",
  TransactionHistoryPointController.update_transactionhistorypoint
);

// Xóa một thành viên
router.delete(
  "/trainpointhistorys/:id",
  TransactionHistoryPointController.delete_transactionhistorypoint
);

module.exports = router;
