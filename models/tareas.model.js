const mongoose = require("mongoose");

const tareasSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tareaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tareas",
  },
  completada: {
    type: String,
    enum: ["usuario", "editor"],
  },
});

const Tareas = mongoose.model("Tareas", tareasSchema);
module.exports = Tareas;
