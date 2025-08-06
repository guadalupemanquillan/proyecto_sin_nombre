const Video = require("../../models/video.model");

exports.getOneVideoService = async (req) => {
  const { id } = req.params;
  return await Video.findById(id).populate("categoríaId");
};
