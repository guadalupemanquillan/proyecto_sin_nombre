const { verificarTestService } = require("../../services/test/verificarTest.service");

exports.verificarTestController = async (req, res) => {
  try {
    const { userId, testId, respuestas } = req.body;

    if (!userId || !testId || !respuestas) {
      return res.status(400).json({ message: "Faltan parámetros" });
    }

    const resultado = await verificarTestService({ userId, testId, respuestas });

    return res.status(200).json({
      message: "Test verificado",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};