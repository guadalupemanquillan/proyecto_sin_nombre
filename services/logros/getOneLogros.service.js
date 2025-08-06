const Logros = require('../../models/logros.model');

exports.getOneLogrosService = async (req) => {
  const { id } = req.params;
  const logro = await Logros.findById(id).populate('usuarioId', 'nombre');
  return logro;
};


