const Video = require("../../models/video.model");

exports.putOneVideoService = async (req) => {
  const { id } = req.params;
  const { urlYouTube, titulo, categoríaId } = req.body;

  return await Video.findByIdAndUpdate(
    id,
    { urlYouTube, titulo, categoríaId },
    { new: true, runValidators: true }
  );
};
 
