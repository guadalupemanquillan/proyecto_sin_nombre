const mongoose = require("mongoose");

const tareasSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tareaId: {
      type: String,
      required: true,
      trim: true,
    },
    completada: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Tareas = mongoose.models.Tareas || mongoose.model("Tareas", tareasSchema);

module.exports = Tareas;
