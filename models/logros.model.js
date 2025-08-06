const mongoose = require("mongoose");

const logrosSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  iconoUrl: {
    type: String,
  },
 },
  {
    timestamps: true,
  }
);

const Logros = mongoose.model("Logros", logrosSchema);
module.exports = Logros;
