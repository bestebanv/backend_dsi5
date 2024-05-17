"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cpe_controller_1 = require("../controllers/cpe.controller");
const cpeRoutes = express_1.Router();
cpeRoutes.get('/cpe/list', cpe_controller_1.getCpe); //lista todos usuarios
cpeRoutes.get('/cpe/:id', cpe_controller_1.getCpeCod); //lista por id
exports.default = cpeRoutes;
