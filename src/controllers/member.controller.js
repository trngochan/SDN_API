const MemberService = require("../services/member.service");

exports.get_all_members = async (req, res) => {
  const result = await MemberService.getAllMembers();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_member = async (req, res) => {
  const memberId = req.params.id;
  const result = await MemberService.getMemberById(memberId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_member = async (req, res) => {
  const newMember = req.body;
  const result = await MemberService.createMember(newMember);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.update_member = async (req, res) => {
  const memberId = req.params.id;
  const updatedMember = req.body;
  const result = await MemberService.updateMember(memberId, updatedMember);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_member = async (req, res) => {
  const memberId = req.params.id;
  const result = await MemberService.deleteMember(memberId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
