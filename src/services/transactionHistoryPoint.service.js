const TransactionHistoryPoint = require("../models/transactionHistoryPoint.model");

exports.getAllTransactionhistorypoints = async () => {
  try {
    const TransactionHistoryPoints = await TransactionHistoryPoint.find();
    return { status: "success", result: TransactionHistoryPoints };
  } catch (error) {
    return {
      status: "error",
      message: "Error getting all TransactionHistoryPoints",
    };
  }
};

exports.getTransactionhistorypointById = async (TransactionHistoryPointId) => {
  try {
    const TransactionHistoryPoint = await TransactionHistoryPoint.findById(
      TransactionHistoryPointId
    );
    return TransactionHistoryPoint
      ? { status: "success", result: TransactionHistoryPoint }
      : { status: "error", message: "TransactionHistoryPoint not found" };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Error getting TransactionHistoryPoint by ID",
    };
  }
};

exports.createTransactionhistorypoint = async (newTransactionHistoryPoint) => {
  try {
    const TransactionHistoryPoint = await TransactionHistoryPoint.create(
      newTransactionHistoryPoint
    );
    return { status: "success", result: TransactionHistoryPoint };
  } catch (error) {
    return {
      status: "error",
      message: "Error creating TransactionHistoryPoint",
    };
  }
};

exports.updateTransactionhistorypoint = async (
  TransactionHistoryPointId,
  updatedTransactionHistoryPoint
) => {
  try {
    const TransactionHistoryPoint =
      await TransactionHistoryPoint.findByIdAndUpdate(
        TransactionHistoryPointId,
        updatedTransactionHistoryPoint,
        {
          new: true,
        }
      );
    return TransactionHistoryPoint
      ? { status: "success", result: TransactionHistoryPoint }
      : { status: "error", message: "TransactionHistoryPoint not found" };
  } catch (error) {
    return {
      status: "error",
      message: "Error updating TransactionHistoryPoint",
    };
  }
};

exports.deleteTransactionhistorypoint = async (TransactionHistoryPointId) => {
  try {
    const deletedTransactionHistoryPoint =
      await TransactionHistoryPoint.findByIdAndDelete(
        TransactionHistoryPointId
      );
    return deletedTransactionHistoryPoint
      ? {
          status: "success",
          result: "TransactionHistoryPoint deleted successfully",
        }
      : { status: "error", message: "TransactionHistoryPoint not found" };
  } catch (error) {
    return {
      status: "error",
      message: "Error deleting TransactionHistoryPoint",
    };
  }
};
