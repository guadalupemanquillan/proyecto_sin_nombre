const Test = require("../../models/test.model");

exports.putOneTestService = async (id, updatedData) => {
  return await Test.findByIdAndUpdate(id, updatedData, { new: true });
};
 
