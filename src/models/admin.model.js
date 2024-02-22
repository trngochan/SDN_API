const mongoose = require("mongoose");

// Define Admin Schema
const adminSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Thêm các trường khác của admin nếu cần
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
