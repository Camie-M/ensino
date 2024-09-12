"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/create-user', UserController_1.UserController.createUser);
userRoutes.get('/get-users', UserController_1.UserController.getAllUsers);
userRoutes.get('/get-user/:id', UserController_1.UserController.getUserById);
userRoutes.put('/edit-user/:id', UserController_1.UserController.editUser);
userRoutes.delete('/delete-user/:id', UserController_1.UserController.deleteUser);
exports.default = userRoutes;
