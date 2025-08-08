const Logros = require("../../models/logros.model");

const User = require("../../models/user.model");

exports.createNewLogrosService = async (userId,nombre,iconoUrl) => {
  const user = await User.findById(userId); 
  if (!user){
    throw new Error("Usuario no encontrado ")
  }
  const nuevoLogro = await Logros.create({
    nombre,
    usuario:user._id,
    iconoUrl,
  });

  user.logros.push(nuevoLogro._id); 
  await user.save ()

  return nuevoLogro;
};
