const Logros = require("../../models/logros.model");
const User = require("../../models/user.model");

exports.createNewLogrosService = async (req) => {
  const { userId, nombre, iconoUrl } = req.body || {};
  if (!userId || !nombre || !iconoUrl) {
    throw new Error("Faltan datos requeridos para crear el logro");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const nuevoLogro = await Logros.create({ nombre, usuarioId: userId, iconoUrl });

  if (!Array.isArray(user.logros)) {
    user.logros = [];
  }

  user.logros.push(nuevoLogro._id);
  await user.save();

  return nuevoLogro;
};
