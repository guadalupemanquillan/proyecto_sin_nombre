const Logros = require("../../models/logros.model");

exports.createNewLogrosService = async ({ body }) => {
  const { nombre, usuarioId, iconoUrl } = body;

  if (!nombre || !usuarioId) {
    throw new Error("Faltan campos obligatorios");
  }

  const nuevoLogro = await Logros.create({
    nombre,
    usuarioId,
    iconoUrl,
  });

  return nuevoLogro;
};
