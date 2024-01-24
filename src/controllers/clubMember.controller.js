const ClubMemberService = require("../services/clubMember.service");

exports.get_all_club_members = async (req, res) => {
  const result = await ClubMemberService.getAllClubMembers();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_club_member = async (req, res) => {
  const memberId = req.params.id;
  const result = await ClubMemberService.getClubMemberById(memberId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_club_member = async (req, res) => {
  const newClubMember = req.body;
  const result = await ClubMemberService.createClubMember(newClubMember);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.update_club_member = async (req, res) => {
  const memberId = req.params.id;
  const updatedClubMember = req.body;
  const result = await ClubMemberService.updateClubMember(memberId, updatedClubMember);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_club_member = async (req, res) => {
  const memberId = req.params.id;
  const result = await ClubMemberService.deleteClubMember(memberId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
