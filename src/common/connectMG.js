const mongoose = require("mongoose");

// Kết nối đến MongoDB
mongoose.connect("mongodb://localhost:27017/SDN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Kiểm tra kết nối thành công hay không
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
