const SportService = require("../services/sport.service");

exports.get_all_sports = async (req, res) => {
  const result = await SportService.getAllSports();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_sport = async (req, res) => {
  const sportId = req.params.id;
  const result = await sportService.getSportById(sportId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_sport = async (req, res) => {
  const newSport = req.body;
  const result = await sportService.createSport(newSport);
  res.status(result.status === "success" ? 201 : 400).json(result);
};

exports.update_sport = async (req, res) => {
  const sportId = req.params.id;
  const updatedSport = req.body;
  const result = await sportService.updateSport(sportId, updatedSport);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_sport = async (req, res) => {
  const sportId = req.params.id;
  const result = await sportService.deleteSport(sportId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
