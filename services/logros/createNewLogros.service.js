const Empresa = require("../../models/empresa.model");

const Logros = require("../../models/logros.model");

exports.createNewLogrosService = async ({ body }) => {
  const { titulo, descripcion, fecha, empresaId } = body;
  if (!titulo || !descripcion || !fecha || !empresaId) {
    throw new Error("Faltan campos obligatorios");
  }
  const empresa = await Empresa.findById(empresaId);
  if (!empresa) {
    throw new Error("La empresa no existe");
  }
  const nuevoLogro = await Logros.create({
    titulo,
    descripcion,
    fecha,
    empresaId,
  });
  return {
    logros: nuevoLogro,
  };
};
