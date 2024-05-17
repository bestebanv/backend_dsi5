import express from "express";
import userRoutes from '../routes/usuario.route';
import cors from 'cors';
import db from "../db/connection";

export default class Server {

    private app : express.Application;
    private port : string;
    private apiPaths = {
        ruta: '/api'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Metodos Iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){

        try {
            
            await db.authenticate();
            console.log('Database Online');
            
        } catch (error) {
            throw new Error("");
            
        }

    }


    middlewares(){
        
        //CORS
        this.app.use( cors() );

        //Lectura del body
        this.app.use( express.json() );

        //Carpeta Publica
        this.app.use( express.static('public') );

    }

    routes(){

        this.app.use(this.apiPaths.ruta, userRoutes )

    }
    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor Corriendo en  puerto ${ this.port }`);
        })
    }


    start( callback: () => void ){
        this.app.listen( this.port, callback );
    }


}