const ClubMemSlotService = require("../services/clubMemSlot.service");

exports.get_all_club_mem_slots = async (req, res) => {
  const result = await ClubMemSlotService.getAllClubMemberSlots();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_club_mem_slot = async (req, res) => {
  const clubMemSlotId = req.params.id;
  const result = await ClubMemSlotService.getClubMemberSlotById(clubMemSlotId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_club_mem_slot = async (req, res) => {
  const newClubMemSlot = req.body;
  const result = await ClubMemSlotService.createClubMemberSlot(newClubMemSlot);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.update_club_mem_slot = async (req, res) => {
  const clubMemSlotId = req.params.id;
  const updatedClubMemSlot = req.body;
  console.log(updatedClubMemSlot);
  const result = await ClubMemSlotService.updateClubMemberSlot(
    clubMemSlotId,
    updatedClubMemSlot
  );
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_club_mem_slot = async (req, res) => {
  const clubMemSlotId = req.params.id;
  const result = await ClubMemSlotService.deleteClubMemberSlot(clubMemSlotId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
