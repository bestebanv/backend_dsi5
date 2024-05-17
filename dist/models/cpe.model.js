"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cpe = connection_1.default.define('link_cpe', {
    idcpe: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    linkcpe: {
        type: sequelize_1.DataTypes.STRING
    },
    codlinkcpe: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    // Opciones del modelo
    freezeTableName: true // Desactivar la pluralización automática del nombre de la tabla
});
exports.default = Cpe;
