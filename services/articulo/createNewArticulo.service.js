const Articulo = require("../../models/articulo.model");

const Categoria = require("../../models/categoria.model");

exports.createNewArticuloService = async (req) => {
  const { titulo, texto, fechaEdicion, autor, categoriaId } = req.body;
  if (!titulo || !texto || !fechaEdicion || !autor || !categoriaId) {
    throw new Error("Faltan campos obligatorios");
  }
  const categoriaExiste = await Categoria.findById(categoriaId);
  if (!categoriaExiste) {
    throw new Error("La categoría no existe");
  }
  const nuevoArticulo = await Articulo.create({
    titulo,
    texto,
    fechaEdicion,
    autor,
    categoriaId,
  });
  return {
    articulo: nuevoArticulo,
  };
};
