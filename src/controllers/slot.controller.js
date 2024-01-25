const SlotService = require("../services/slot.service");

exports.get_all_slots = async (req, res) => {
  const result = await SlotService.getAllSlots();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_slot = async (req, res) => {
  const slotId = req.params.id;
  const result = await SlotService.getSlotById(slotId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_slot = async (req, res) => {
  const newSlot = req.body;
  const result = await SlotService.createSlot(newSlot);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.update_slot = async (req, res) => {
  const slotId = req.params.id;
  const updatedSlot = req.body;
  const result = await SlotService.updateSlot(slotId, updatedSlot);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_slot = async (req, res) => {
  const slotId = req.params.id;
  const result = await SlotService.deleteSlot(slotId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
