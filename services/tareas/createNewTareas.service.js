const Tareas = require("../../models/tareas.model");

exports.createNewTareasService = async (data) => {
  const newTarea = new Tareas(data);
  const savedTarea = await newTarea.save();
  return savedTarea;
};
