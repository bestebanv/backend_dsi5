import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios.controller';



const userRoutes = Router();

userRoutes.get('/usuario/list',          getUsuarios );//lista todos usuarios
userRoutes.get('/usuario/:id',      getUsuario );//lista por id
userRoutes.post('/usuario/add',        postUsuario );//crear usuario
userRoutes.put('/usuario/edit/:id',      putUsuario );//actualizar usuario
userRoutes.delete('/usuario/delete/:id',   deleteUsuario );//eliminar usuario


export default userRoutes ;