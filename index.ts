import dotenv from 'dotenv';
import Server from "./classes/server";

dotenv.config();//configurar dot.env



const server = new Server();

server.listen();

