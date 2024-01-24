const express = require("express");
const router = express.Router();
const WalletController = require("../controllers/wallet.controller");

// Lấy danh sách tất cả ví
router.get("/wallets", WalletController.get_all_wallets);

// Tạo mới ví
router.post("/wallets", WalletController.create_wallet);

// Lấy thông tin của một ví cụ thể
router.get("/wallets/:id", WalletController.get_wallet);

// Cập nhật thông tin của một ví
router.put("/wallets/:id", WalletController.update_wallet);

// Xóa một ví
router.delete("/wallets/:id", WalletController.delete_wallet);

module.exports = router;
