const Logros = require("../../models/logros.model");

exports.getAllLogrosService = async (req) => {
  const logros = await Logros.find().populate("usuarioId", "nombre");
  return logros;
};
