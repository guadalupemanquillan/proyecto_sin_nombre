const Test = require("../../models/test.model");

exports.deleteOneTestService = async (id) => {
  return await Test.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
