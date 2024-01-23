const TranPoint = require("../models/tranPoint.model");

exports.getAllTranpoints = async () => {
  try {
    const trainpoints = await TranPoint.find();
    return { status: "success", result: trainpoints };
  } catch (error) {
    return { status: "error", message: "Error getting all trainpoints" };
  }
};

exports.getTranpointById = async (trainpointId) => {
  try {
    const trainpoint = await TranPoint.findById(trainpointId);
    return trainpoint
      ? { status: "success", result: trainpoint }
      : { status: "error", message: "trainpoint not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting trainpoint by ID" };
  }
};

exports.createTranpoint = async (newtrainpoint) => {
  try {
    const trainpoint = await TranPoint.create(newtrainpoint);
    return { status: "success", result: trainpoint };
  } catch (error) {
    return { status: "error", message: "Error creating trainpoint" };
  }
};

exports.updateTranpoint = async (trainpointId, updatedtrainpoint) => {
  try {
    const trainpoint = await TranPoint.findByIdAndUpdate(
      trainpointId,
      updatedtrainpoint,
      {
        new: true,
      }
    );
    return trainpoint
      ? { status: "success", result: trainpoint }
      : { status: "error", message: "trainpoint not found" };
  } catch (error) {
    return { status: "error", message: "Error updating trainpoint" };
  }
};

exports.deleteTranpoint = async (trainpointId) => {
  try {
    const deletedtrainpoint = await TranPoint.findByIdAndDelete(trainpointId);
    return deletedtrainpoint
      ? { status: "success", result: "trainpoint deleted successfully" }
      : { status: "error", message: "trainpoint not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting trainpoint" };
  }
};
