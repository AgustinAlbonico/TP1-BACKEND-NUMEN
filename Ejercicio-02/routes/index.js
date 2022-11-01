const api = require('express').Router();

const { userController } = require('../controllers')

api.get("/users/", userController.getUsers);
api.post("/users", userController.createUser);
api.put("/users/:id", userController.updateUser);
api.delete("/users/:id", userController.deleteUser);
api.get("/users/:id", userController.getUser);

module.exports = api;