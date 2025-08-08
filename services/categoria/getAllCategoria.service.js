const Categoria = require("../../models/categoria.model");

exports.getAllCategoriaService = async () => {
  const categorias = await Categoria.find({ isDeleted: { $ne: true } });
  return categorias;
};
