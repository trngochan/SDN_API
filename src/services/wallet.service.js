const Wallet = require("../models/wallet.model");

exports.getAllWallets = async () => {
  try {
    const wallets = await Wallet.find();
    return { status: "success", result: wallets };
  } catch (error) {
    return { status: "error", message: "Error getting all wallets" };
  }
};

exports.getWalletById = async (walletId) => {
  try {
    const wallet = await Wallet.findById(walletId);
    return wallet
      ? { status: "success", result: wallet }
      : { status: "error", message: "Wallet not found" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Error getting wallet by ID" };
  }
};

exports.createWallet = async (newWallet) => {
  try {
    const wallet = await Wallet.create(newWallet);
    return { status: "success", result: wallet };
  } catch (error) {
    return { status: "error", message: "Error creating wallet" };
  }
};

exports.updateWallet = async (walletId, updatedWallet) => {
  try {
    const wallet = await Wallet.findByIdAndUpdate(walletId, updatedWallet, { new: true });
    return wallet
      ? { status: "success", result: wallet }
      : { status: "error", message: "Wallet not found" };
  } catch (error) {
    return { status: "error", message: "Error updating wallet" };
  }
};

exports.deleteWallet = async (walletId) => {
  try {
    const deletedWallet = await Wallet.findByIdAndDelete(walletId);
    return deletedWallet
      ? { status: "success", result: "Wallet deleted successfully" }
      : { status: "error", message: "Wallet not found" };
  } catch (error) {
    return { status: "error", message: "Error deleting wallet" };
  }
};
