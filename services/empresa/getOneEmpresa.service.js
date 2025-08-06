const Empresa = require("../../models/empresa.model");

exports.getOneEmpresaService = async (id) => {
  const result = await Empresa.findById(id);
  if (!result) {
    throw new Error("No se encontro ninguna empresa");
  }
  return result;
};
