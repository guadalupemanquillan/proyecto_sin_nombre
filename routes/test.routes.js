const express = require("express");

const testRouter = express.Router();

const {
  createNewTestController,
} = require("../controllers/test/createNewTest.controller");

const {
  deleteOneTestController,
} = require("../controllers/test/deleteOneTest.controller");

const {
  getAllTestController,
} = require("../controllers/test/getAllTest.controller");

const {
  getOneTestController,
} = require("../controllers/test/getOneTest.controller");

const {
  putOneTestController,
} = require("../controllers/test/putOneTest.controller");

const {
  verificarTestController,
} = require("../controllers/test/verificarTest.controller");

// POST
testRouter.post("/", createNewTestController);
testRouter.post("/verificarTest/:userId/:testId",verificarTestController)
// DELETE
testRouter.delete("/:id", deleteOneTestController);
// GET
testRouter.get("/", getAllTestController);
testRouter.get("/:id", getOneTestController);
// PUT
testRouter.put("/:id", putOneTestController);

module.exports = testRouter;
