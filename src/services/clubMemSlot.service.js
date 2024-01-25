const ClubMemSlot = require("../models/clubMemSlot.model");

exports.getAllClubMemberSlots = async () => {
  try {
    const clubMemSlots = await ClubMemSlot.find();
    return { status: "success", result: clubMemSlots };
  } catch (error) {
    return { status: "error", message: "Error getting all club member slots" };
  }
};

exports.getClubMemberSlotById = async (clubMemSlotId) => {
  try {
    const clubMemSlot = await ClubMemSlot.findById(clubMemSlotId);
    return clubMemSlot
      ? { status: "success", result: clubMemSlot }
      : { status: "error", message: "Club member slot not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting club member slot by ID" };
  }
};

exports.createClubMemberSlot = async (newClubMemberSlot) => {
  try {
    const clubMemSlot = await ClubMemSlot.create(newClubMemberSlot);
    return { status: "success", result: clubMemSlot };
  } catch (error) {
    return { status: "error", message: "Error creating club member slot" };
  }
};

exports.updateClubMemberSlot = async (clubMemSlotId, updatedClubMemberSlot) => {
  try {
    const clubMemSlot = await ClubMemSlot.findByIdAndUpdate(
      clubMemSlotId,
      updatedClubMemberSlot,
      { new: true }
    );
    return clubMemSlot
      ? { status: "success", result: clubMemSlot }
      : { status: "error", message: "Club member slot not found" };
  } catch (error) {
    return { status: "error", message: "Error updating club member slot" };
  }
};

exports.deleteClubMemberSlot = async (clubMemSlotId) => {
  try {
    const deletedClubMemSlot = await ClubMemSlot.findByIdAndDelete(clubMemSlotId);
    return deletedClubMemSlot
      ? { status: "success", result: "Club member slot deleted successfully" }
      : { status: "error", message: "Club member slot not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting club member slot" };
  }
};
