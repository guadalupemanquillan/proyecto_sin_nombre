const {
  createNewUserService,
} = require("../../services/user/createNewUser.service");

exports.createNewUserController = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await createNewUserService(data);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};
