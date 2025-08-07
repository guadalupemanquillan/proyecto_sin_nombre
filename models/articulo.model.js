const mongoose = require("mongoose");

const articuloSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
    },
    texto: {
      type: String,
    },
    autor: {
      type: String,
    },
    categoriaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categoria",
    },
    fechaEdicion: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Articulo = mongoose.model("Articulo", articuloSchema);

module.exports = Articulo;
