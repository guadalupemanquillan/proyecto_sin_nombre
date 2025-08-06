const bcrypt = require("bcrypt");
const User = require("../../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.loginService = async (req, res) => {
  if (!req.body.username && !req.body.password)
    throw new Error("Campos requeridos no entregados.");

  const jwt = require("jsonwebtoken");

  const { username, password } = req.body;
  const backupUser = process.env.BACKUP_USER;
  const backupPass = process.env.BACKUP_PASSWORD;

  const usuarioDB = await User.findOne({ username });

  if (usuarioDB) {
    const result = await bcrypt.compare(password, usuarioDB.password);
    if (result) {
      const token = jwt.sign(
        { userId: usuarioDB._id },
        procces.env.SECRET_KEY,
        { expiresIn: "12h" }//luego hay que cambiar a 1hs 
      );
      return { token };
    } else {
      throw new Error("Contraseña es incorrecta.");
    }
  }

  if (username === backupUser && password === backupPass) {
    const token = jwt.sign({ userId: "admin" }, process.env.SECRET_KEY, {
      expiresIn: "12h",
    });
    return { token };
  } else {
    throw new Error("Credenciales incorrectas");
  }
};
