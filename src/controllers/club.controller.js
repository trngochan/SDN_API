const ClubService = require("../services/club.service");

exports.get_all_clubs = async (req, res) => {
  const result = await ClubService.getAllClubs();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_club = async (req, res) => {
  const clubId = req.params.id;
  const result = await ClubService.getClubById(clubId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_club = async (req, res) => {
  const newClub = req.body;
  const result = await ClubService.createClub(newClub);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.update_club = async (req, res) => {
  const clubId = req.params.id;
  const updatedClub = req.body;
  const result = await ClubService.updateClub(clubId, updatedClub);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_club = async (req, res) => {
  const clubId = req.params.id;
  const result = await ClubService.deleteClub(clubId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
