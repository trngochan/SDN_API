const TranPointService = require("../services/tranPoint.service");

exports.get_all_tranpoints = async (req, res) => {
  const result = await TranPointService.getAllTranpoints();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_tranpoint = async (req, res) => {
  const TranpointId = req.params.id;
  const result = await TranPointService.getTranpointById(TranpointId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_tranpoint = async (req, res) => {
  const newTranpoint = req.body;
  const result = await TranPointService.createTranpoint(newTranpoint);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.update_tranpoint = async (req, res) => {
  const TranpointId = req.params.id;
  const updatedTranpoint = req.body;
  const result = await TranPointService.updateTranpoint(
    TranpointId,
    updatedTranpoint
  );
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_tranpoint = async (req, res) => {
  const TranpointId = req.params.id;
  const result = await TranPointService.deleteTranpoint(TranpointId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
