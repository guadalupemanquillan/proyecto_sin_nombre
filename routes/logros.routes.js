const express = require("express");

const logrosRouter = express.Router();

const {
  createNewLogrosController,
} = require("../controllers/logros/createNewLogros.controller");

const {
  deleteLogrosController,
} = require("../controllers/logros/deleteLogros.controller");

const {
  getAllLogrosController,
} = require("../controllers/logros/getAllLogros.controller");
const {
  getOneLogrosController,
} = require("../controllers/logros/getOneLogros.controller");

const {
  putOneLogrosController,
} = require("../controllers/logros/putOneLogros.controller");

// // POST
logrosRouter.post("/", createNewLogrosController);
// // DELETE
logrosRouter.delete("/:id", deleteLogrosController);

// GET
logrosRouter.get("/logros", getAllLogrosController);
logrosRouter.get("/:id", getOneLogrosController);

// PUT
logrosRouter.put("/:id", putOneLogrosController);

module.exports = logrosRouter;
