const YardService = require("../services/yard.service");

exports.get_all_yards = async (req, res) => {
  const result = await YardService.getAllYards();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_yard = async (req, res) => {
  const yardId = req.params.id;
  const result = await YardService.getYardById(yardId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_yard = async (req, res) => {
  const newYard = req.body;
  const result = await YardService.createYard(newYard);
  res.status(result.status === "success" ? 201 : 400).json(result);
};

exports.update_yard = async (req, res) => {
  const yardId = req.params.id;
  const updatedYard = req.body;
  const result = await YardService.updateYard(yardId, updatedYard);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_yard = async (req, res) => {
  const yardId = req.params.id;
  const result = await YardService.deleteYard(yardId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
