const Sport = require("../models/sport.model");

exports.getAllSports = async () => {
  try {
    const sports = await Sport.find();
    return { status: "success", result: sports };
  } catch (error) {
    return { status: "error", message: "Error getting all sports" };
  }
};

exports.getSportById = async (sportId) => {
  try {
    const sport = await Sport.findById(sportId);
    return sport
      ? { status: "success", result: sport }
      : { status: "error", message: "Sport not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting sport by ID" };
  }
};

exports.createSport = async (newSport) => {
  try {
    const sport = await Sport.create(newSport);
    return { status: "success", result: sport };
  } catch (error) {
    return { status: "error", message: "Error creating sport" };
  }
};

exports.updateSport = async (sportId, updatedSport) => {
  try {
    const sport = await Sport.findByIdAndUpdate(sportId, updatedSport, { new: true });
    return sport
      ? { status: "success", result: sport }
      : { status: "error", message: "Sport not found" };
  } catch (error) {
    return { status: "error", message: "Error updating sport" };
  }
};

exports.deleteSport = async (sportId) => {
  try {
    const deletedSport = await Sport.findByIdAndDelete(sportId);
    return deletedSport
      ? { status: "success", result: "Sport deleted successfully" }
      : { status: "error", message: "Sport not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting sport" };
  }
};
