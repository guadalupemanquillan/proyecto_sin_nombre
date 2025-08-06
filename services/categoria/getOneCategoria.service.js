const Categoria = require("../../models/categoria.model");
const mongoose = require("mongoose");

exports.getOneCategoriaService = async (id) => {
  if (!id) throw new Error("ID de categoría no proporcionado");

  if (!mongoose.isValidObjectId(id)) {
    throw new Error("El ID no es válido");
  }

  const categoria = await Categoria.findById(id);

  if (!categoria) {
    throw new Error("Categoría no encontrada");
  }

  return categoria;
};
