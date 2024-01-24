const ClubMember = require("../models/clubMember.model");

exports.getAllClubMembers = async () => {
  try {
    const clubMembers = await ClubMember.find();
    return { status: "success", result: clubMembers };
  } catch (error) {
    return { status: "error", message: "Error getting all club members" };
  }
};

exports.getClubMemberById = async (memberId) => {
  try {
    const clubMember = await ClubMember.findById(memberId);
    return clubMember
      ? { status: "success", result: clubMember }
      : { status: "error", message: "Club member not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting club member by ID" };
  }
};

exports.createClubMember = async (newClubMember) => {
  try {
    const clubMember = await ClubMember.create(newClubMember);
    return { status: "success", result: clubMember };
  } catch (error) {
    return { status: "error", message: "Error creating club member" };
  }
};

exports.updateClubMember = async (memberId, updatedClubMember) => {
  try {
    const clubMember = await ClubMember.findByIdAndUpdate(
      memberId,
      updatedClubMember,
      { new: true }
    );
    return clubMember
      ? { status: "success", result: clubMember }
      : { status: "error", message: "Club member not found" };
  } catch (error) {
    return { status: "error", message: "Error updating club member" };
  }
};

exports.deleteClubMember = async (memberId) => {
  try {
    const deletedClubMember = await ClubMember.findByIdAndDelete(memberId);
    return deletedClubMember
      ? { status: "success", result: "Club member deleted successfully" }
      : { status: "error", message: "Club member not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting club member" };
  }
};
