const express = require("express");
const routes = express.Router();
const { fiController } = require("../controllers");

routes.get("/fibonacci/:numero?", fiController.getFiNumbers);

module.exports = routes;
