// auth.service.js
const Member = require("../models/member.model");
const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

exports.login_member = async function (email, password, callback) {
  try {
    console.log(email, password);
    const member = await Member.findOne({ email: email, password: password });
    if (!member) {
      return callback({
        status: "error",
        message: "Email hoặc mật khẩu không đúng",
      });
    }

    // Tạo token
    const token = jwt.sign({ memberId: member._id }, "your-secret-key", {
      expiresIn: "1h", // Thời gian hết hạn của token
    });

    callback({
      status: "success",
      token: token,
      user: {
        id: member._id,
        name: member.name,
        role: "user",
        email: member.email,
        image: member.image,
      },
    });
  } catch (error) {
    console.error(error);
    callback({
      status: "error",
      message: "Đã xảy ra lỗi khi tìm kiếm thành viên",
    });
  }
};

exports.login_admin = function (username, password, callback) {
  Admin.getByUsername(username, function (result) {
    if (result.status === "success") {
      const member = result.result;

      // Kiểm tra mật khẩu
      if (member.password === password) {
        // Tạo token
        const token = jwt.sign({ memberId: member.id }, "your-secret-key", {
          expiresIn: "1h", // Thời gian hết hạn của token
        });

        callback({
          status: "success",
          token: token,
          role: "admin",
          user: {
            id: member.id,
            name: member.name,
            username: member.username,
          },
        });
      } else {
        callback({ status: "error", message: "Mật khẩu không đúng" });
      }
    } else {
      callback({ status: "error", message: "Email không tồn tại" });
    }
  });
};
