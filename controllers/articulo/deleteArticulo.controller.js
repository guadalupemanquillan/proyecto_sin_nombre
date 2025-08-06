const {
  deleteArticuloService,
} = require("../../services/articulo/deleteOneArticulo.service");

exports.deleteArticuloController=async (req, res) => {
  try {
    const result = await deleteArticuloService(req);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error al eliminar artículo:", error.message);
    return res.status(400).json({
      error: error.message,
    });
  }
};
