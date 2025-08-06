const {
  getAllCategoriaService,
} = require("../../services/categoria/getAllCategoria.service");

exports.getAllCategoriasController = async (req, res) => {
  try {
    const categorias = await getAllCategoriaService();

    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
