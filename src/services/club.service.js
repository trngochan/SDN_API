const Club = require("../models/club.model");

exports.getAllClubs = async () => {
  try {
    const clubs = await Club.find();
    return { status: "success", result: clubs };
  } catch (error) {
    return { status: "error", message: "Error getting all clubs" };
  }
};

exports.getClubById = async (clubId) => {
  try {
    const club = await Club.findById(clubId);
    return club
      ? { status: "success", result: club }
      : { status: "error", message: "Club not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting club by ID" };
  }
};

exports.createClub = async (newClub) => {
  try {
    const club = await Club.create(newClub);
    return { status: "success", result: club };
  } catch (error) {
    return { status: "error", message: "Error creating club" };
  }
};

exports.updateClub = async (clubId, updatedClub) => {
  try {
    const club = await Club.findByIdAndUpdate(clubId, updatedClub, { new: true });
    return club
      ? { status: "success", result: club }
      : { status: "error", message: "Club not found" };
  } catch (error) {
    return { status: "error", message: "Error updating club" };
  }
};

exports.deleteClub = async (clubId) => {
  try {
    const deletedClub = await Club.findByIdAndDelete(clubId);
    return deletedClub
      ? { status: "success", result: "Club deleted successfully" }
      : { status: "error", message: "Club not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting club" };
  }
};
