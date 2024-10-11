import dotenv from "dotenv";
import mongoose from 'mongoose';
import express from "express";
import dbConnect from './config/mongoose.config.js';
import CancionesRoutes from "./routes/Canciones.routes.js";


dotenv.config();    // Nos permite leer variables de entorno
const app = express();// Creamos nuestra instancia del servidor
const PORT = process.env.PORT || 3001;


//CONFIGURACIONES
app.use(express.json());//SOPORTE PARA FORMATO JSON




//USO DE RUTAS
app.use("/api/canciones", CancionesRoutes);




dbConnect();

//Iniciamos el servidor
app.listen(PORT, () => {
    //Mostramos mensaje en consola
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});