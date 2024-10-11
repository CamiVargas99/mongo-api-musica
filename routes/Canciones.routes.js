import express from 'express';
const router = express.Router();
import CancionesController from "../controllers/Canciones.controllers.js";


//CREAR CANCION
router.post("/",CancionesController.CrearCancion);
//TODAS LAS CANCIONES
router.get("/", CancionesController.MostrarCanciones);
//OBTENER UNA CANCION POR ID
router.get("/:id", CancionesController.BuscarPorId);
//Actualizar una cancion
router.put("/:id", CancionesController.ActualizarPorId);
//Eliminar Cancion
router.delete("/:id",CancionesController.EliminarCancion);

export default router;