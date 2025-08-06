const express = require("express");
const categoriaRouter = express.Router();

const {
  createNewCategoriaController,
} = require("../controllers/categoria/createNewCategoria.controller");

const {
  putOneCategoriaController,
} = require("../controllers/categoria/putOneCategoria.controllers");

const {
  getOneCategoriaController,
} = require("../controllers/categoria/getOneCategoria.controller");

const {
  getAllCategoriasController,
} = require("../controllers/categoria/getAllCategorias.controller");

const {
  deleteOneCategoriaController,
} = require("../controllers/categoria/deleteOneCategoria.controller");

// GET
categoriaRouter.get("/:id", getOneCategoriaController);
categoriaRouter.get("/", getAllCategoriasController);

// POST
categoriaRouter.post("/", createNewCategoriaController);

// PUT
categoriaRouter.put("/:id", putOneCategoriaController);

// DELETE
categoriaRouter.delete("/:id", deleteOneCategoriaController);

module.exports = categoriaRouter;
