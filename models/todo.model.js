const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  titulo: {
    type: String,
  },
  tareaBase: {
    type: Number,
  },
  categoriaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
