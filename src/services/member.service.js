const Member = require("../models/member.model");

exports.getAllMembers = async () => {
  try {
    const members = await Member.find();
    return { status: "success", result: members };
  } catch (error) {
    return { status: "error", message: "Error getting all members" };
  }
};

exports.getMemberById = async (memberId) => {
  try {
    const member = await Member.findById(memberId);
    return member
      ? { status: "success", result: member }
      : { status: "error", message: "Member not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting member by ID" };
  }
};

exports.createMember = async (newMember) => {
  try {
    const member = await Member.create(newMember);
    return { status: "success", result: member };
  } catch (error) {
    return { status: "error", message: "Error creating member" };
  }
};

exports.updateMember = async (memberId, updatedMember) => {
  try {
    const member = await Member.findByIdAndUpdate(memberId, updatedMember, {
      new: true,
    });
    return member
      ? { status: "success", result: member }
      : { status: "error", message: "Member not found" };
  } catch (error) {
    return { status: "error", message: "Error updating member" };
  }
};

exports.deleteMember = async (memberId) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(memberId);
    return deletedMember
      ? { status: "success", result: "Member deleted successfully" }
      : { status: "error", message: "Member not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting member" };
  }
};
