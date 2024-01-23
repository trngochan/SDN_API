const TransactionHistoryPointService = require("../services/transactionHistoryPoint.service");

exports.get_all_transactionhistorypoints = async (req, res) => {
  const result =
    await TransactionHistoryPointService.getAllTransactionhistorypoints();
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.get_transactionhistorypoint = async (req, res) => {
  const transactionhistorypointId = req.params.id;
  const result =
    await TransactionHistoryPointService.getTransactionhistorypointById(
      transactionhistorypointId
    );
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.create_transactionhistorypoint = async (req, res) => {
  const newtransactionhistorypoint = req.body;
  const result =
    await TransactionHistoryPointService.createTransactionhistorypoint(
      newtransactionhistorypoint
    );
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.update_transactionhistorypoint = async (req, res) => {
  const transactionhistorypointId = req.params.id;
  const updatedtransactionhistorypoint = req.body;
  const result =
    await TransactionHistoryPointService.updateTransactionhistorypoint(
      transactionhistorypointId,
      updatedtransactionhistorypoint
    );
  res.status(result.status === "success" ? 200 : 404).json(result);
};

exports.delete_transactionhistorypoint = async (req, res) => {
  const transactionhistorypointId = req.params.id;
  const result =
    await TransactionHistoryPointService.deleteTransactionhistorypoint(
      transactionhistorypointId
    );
  res.status(result.status === "success" ? 200 : 404).json(result);
};
