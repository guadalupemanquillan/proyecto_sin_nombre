const Video = require("../../models/video.model");

exports.deleteOneVideoService = async (req) => {
  const { id } = req.params;
  return await Video.findByIdAndDelete(id);
};


