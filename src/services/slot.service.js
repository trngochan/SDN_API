const Slot = require("../models/slot.model");

exports.getAllSlots = async () => {
  try {
    const slots = await Slot.find();
    return { status: "success", result: slots };
  } catch (error) {
    return { status: "error", message: "Error getting all slots" };
  }
};

exports.getSlotById = async (slotId) => {
  try {
    const slot = await Slot.findById(slotId);
    return slot
      ? { status: "success", result: slot }
      : { status: "error", message: "Slot not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting slot by ID" };
  }
};

exports.createSlot = async (newSlot) => {
  try {
    const slot = await Slot.create(newSlot);
    return { status: "success", result: slot };
  } catch (error) {
    return { status: "error", message: "Error creating slot" };
  }
};

exports.updateSlot = async (slotId, updatedSlot) => {
  try {
    const slot = await Slot.findByIdAndUpdate(slotId, updatedSlot, { new: true });
    return slot
      ? { status: "success", result: slot }
      : { status: "error", message: "Slot not found" };
  } catch (error) {
    return { status: "error", message: "Error updating slot" };
  }
};

exports.deleteSlot = async (slotId) => {
  try {
    const deletedSlot = await Slot.findByIdAndDelete(slotId);
    return deletedSlot
      ? { status: "success", result: "Slot deleted successfully" }
      : { status: "error", message: "Slot not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting slot" };
  }
};
