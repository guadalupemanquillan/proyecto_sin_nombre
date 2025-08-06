const Video = require("../../models/video.model");

exports.createNewVideoService = async (req) => {
  const { urlYouTube, titulo, categoríaId } = req.body;
  const newVideo = new Video({ urlYouTube, titulo, categoríaId });
  return await newVideo.save();
};
