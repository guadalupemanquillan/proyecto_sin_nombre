const Categoria = require("../../models/categoria.model");

exports.deleteOneCategoriaService = async (req) => {
  const { id } = req.params;

  if (!id) throw new Error("ID de categoría no proporcionado");

  const categoria = await Categoria.findById(id);
  if (!categoria) throw new Error("Categoría no encontrada");

  await categoria.deleteOne(); 

  return { message: "Categoría eliminada correctamente" };
};
