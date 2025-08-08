const Test = require("../../models/test.model");

exports.getOneTestService = async (id) => {
  return await Test.findOne({ _id: id, isDeleted: { $ne: true } }).populate(
    "logros"
  );
};
