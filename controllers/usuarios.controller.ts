import { Request, Response } from "express";
import Usuario from '../models/usuario.model';


//listar todos
export const getUsuarios = async ( req: Request, res: Response ) => {

    const usuarios = await Usuario.findAll({
        where: {
            estado:true
        }
    });

    res.json({ usuarios })

}

//listar usuario por id
export const getUsuario = async( req: Request, res: Response ) => {

    const  { id } = req.params;
    const usuario = await Usuario.findByPk( id );

    if( usuario ){
        res.json({ usuario });
    } else {
        res.status(404).json({
            msg:`No existe un usuario con el id ${ id }`
        });
    }
    
}

//crear usuario
export const postUsuario = async( req: Request, res: Response ) => {

    const  { body } = req;

    try {
        
        const existEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if(existEmail){
            res.status(400).json({
                msg:'Ya existe un usuario con el email ' + body.email
            });
        }

        const usuario = Usuario.build(body);
        await usuario.save();
        res.json( usuario );

    } catch (error) {
        console.log(error);
        res.status(505).json({
            msg:'Error: Hable con el administrador'
        });
    }
    
    
}

//actualizar usuario
export const putUsuario = async( req: Request, res: Response ) => {

    const  { id } = req.params;
    const  { body } = req;

    try {
        
        const usuario = await Usuario.findByPk( id );
        if(!usuario){
            return res.status(404).json({
                msg:'No existe un usuario con el id ' + id
            });
        }

        await usuario.update( body );
        res.json( usuario );

    } catch (error) {
        console.log(error);
        res.status(505).json({
            msg:'Error: Hable con el administrador'
        });
    }
    
    
}

//eliminar usuario
export const deleteUsuario = async( req: Request, res: Response ) => {

    const  { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    if(!usuario){
        return res.status(404).json({
            msg:'No existe un usuario con el id ' + id
        });
    }

    await usuario.update( { estado: false });
    // await usuario.destroy();

    res.json({ usuario })
    
}