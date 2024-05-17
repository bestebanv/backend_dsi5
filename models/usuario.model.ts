import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('users', {
    iduser: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nameuser: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
});

export default Usuario;