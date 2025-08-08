const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  titulo: {
    type: String,
  },
  tareaBase: [
    {
      tareaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tareas",
      },
      completada: {
        type: Boolean,
        default: false
      }
    },
  ],
  categoriaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
