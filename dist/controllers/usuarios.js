"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
//listar todos
const getUsuarios = (req, res) => {
    res.json({
        ok: true,
        msg: 'Todo Funciona bien.'
    });
};
exports.getUsuarios = getUsuarios;
//listar usuario por id
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'Todo Funciona bien, get usuario',
        id
    });
};
exports.getUsuario = getUsuario;
//crear usuario
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        ok: true,
        msg: 'Todo Funciona bien, postUsuario',
        body
    });
};
exports.postUsuario = postUsuario;
//actualizar usuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        ok: true,
        msg: 'Todo Funciona bien, putUsuario',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
//eliminar usuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'Todo Funciona bien, delete',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
