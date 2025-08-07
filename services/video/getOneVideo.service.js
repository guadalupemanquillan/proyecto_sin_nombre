const Video = require("../../models/video.model");

exports.getOneVideoService = async (id) => {
  const video = await Video.findById(id);
  return video;
};
