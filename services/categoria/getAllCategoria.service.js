const Categoria = require("../../models/categoria.model");

exports.getAllCategoriaService = async () => {
  const categorias = await Categoria.find();

  return categorias;
};
