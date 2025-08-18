const Logros = require("../../models/logros.model");

exports.getAllLogrosService = async (req) => {
  const logros = await Logros.find({ isDeleted: { $ne: true } }).populate("usuarioId", "nombre");
  return logros;
};
