const Video = require("../../models/video.model");

exports.getAllVideosService = async () => {
  return await Video.find().populate("categoríaId");
};
