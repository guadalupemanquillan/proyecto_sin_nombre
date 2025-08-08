const { getOneTestService } = require("../../services/test/getOneTest.service");

exports.getOneTestController = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await getOneTestService(id);
    if (!test) {
      return res.status(404).json({ message: "Test no encontrado" });
    }
    res.json({ test });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener el test", error: error.message });
  }
};
