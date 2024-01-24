const Yard = require("../models/yard.model");

exports.getAllYards = async () => {
  try {
    const yards = await Yard.find();
    return { status: "success", result: yards };
  } catch (error) {
    return { status: "error", message: "Error getting all yards" };
  }
};

exports.getYardById = async (yardId) => {
  try {
    const yard = await Yard.findById(yardId);
    return yard
      ? { status: "success", result: yard }
      : { status: "error", message: "Yard not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting yard by ID" };
  }
};

exports.createYard = async (newYard) => {
  try {
    const yard = await Yard.create(newYard);
    return { status: "success", result: yard };
  } catch (error) {
    return { status: "error", message: "Error creating yard" };
  }
};

exports.updateYard = async (yardId, updatedYard) => {
  try {
    const yard = await Yard.findByIdAndUpdate(yardId, updatedYard, { new: true });
    return yard
      ? { status: "success", result: yard }
      : { status: "error", message: "Yard not found" };
  } catch (error) {
    return { status: "error", message: "Error updating yard" };
  }
};

exports.deleteYard = async (yardId) => {
  try {
    const deletedYard = await Yard.findByIdAndDelete(yardId);
    return deletedYard
      ? { status: "success", result: "Yard deleted successfully" }
      : { status: "error", message: "Yard not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting yard" };
  }
};
