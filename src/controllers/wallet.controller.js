const WalletService = require("../services/wallet.service");

exports.get_all_wallets = async (req, res) => {
  const result = await WalletService.getAllWallets();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_wallet = async (req, res) => {
  const walletId = req.params.id;
  const result = await WalletService.getWalletById(walletId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_wallet = async (req, res) => {
  const newWallet = req.body;
  const result = await WalletService.createWallet(newWallet);
  res.status(result.status === "success" ? 201 : 400).json(result);
};

exports.update_wallet = async (req, res) => {
  const walletId = req.params.id;
  const updatedWallet = req.body;
  const result = await WalletService.updateWallet(walletId, updatedWallet);
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_wallet = async (req, res) => {
  const walletId = req.params.id;
  const result = await WalletService.deleteWallet(walletId);
  res.status(result.status === "success" ? 200 : 404).json(result);
};
