"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const userRoutes = express_1.Router();
userRoutes.get('/usuario/list', usuarios_controller_1.getUsuarios); //lista todos usuarios
userRoutes.get('/usuario/:id', usuarios_controller_1.getUsuario); //lista por id
userRoutes.post('/usuario/add', usuarios_controller_1.postUsuario); //crear usuario
userRoutes.put('/usuario/edit/:id', usuarios_controller_1.putUsuario); //actualizar usuario
userRoutes.delete('/usuario/delete/:id', usuarios_controller_1.deleteUsuario); //eliminar usuario
exports.default = userRoutes;
