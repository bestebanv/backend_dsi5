"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCpeCod = exports.getCpe = void 0;
const cpe_model_1 = __importDefault(require("../models/cpe.model"));
//listar todos
const getCpe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cpe = yield cpe_model_1.default.findAll();
    res.json({ cpe });
});
exports.getCpe = getCpe;
//listar cpe por id
const getCpeCod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cpe = yield cpe_model_1.default.findAll({
        where: {
            codlinkcpe: id
        }
    });
    if (cpe) {
        res.json({ cpe });
    }
    else {
        res.status(404).json({
            msg: `No existe un link con el cod ${id}`
        });
    }
});
exports.getCpeCod = getCpeCod;
