const mongoose = require("mongoose");

const tareasSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    completada: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

const Tareas = mongoose.model("Tareas", tareasSchema);

module.exports = Tareas;
