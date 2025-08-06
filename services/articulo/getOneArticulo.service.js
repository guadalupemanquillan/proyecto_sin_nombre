const Articulo = require("../../models/articulo.model");

exports.getOneArticuloService = async (id) => {
  try {
    const articulo = await Articulo.findById(id).populate("categoriaId");
    return articulo;
  } catch (error) {
    throw new Error(error.message);
  }
};
