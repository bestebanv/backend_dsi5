"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('dsi5', 'root', '6w3ab22bd', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
});
exports.default = db;
