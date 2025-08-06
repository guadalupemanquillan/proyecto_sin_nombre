const Articulo = require("../../models/articulo.model");

exports.deleteArticuloService = async (req) => {
  const { id } = req.params;
  if (!id) {
    throw new Error("ID del artículo no proporcionado");
  }
  const articulo = await Articulo.findById(id);
  if (!articulo) {
    throw new Error("El artículo no existe");
  }
  await Articulo.findByIdAndDelete(id);
  return {
    articuloEliminado: "Este articulo fue eliminado correctamente: ",
    articulo,
  };
};
