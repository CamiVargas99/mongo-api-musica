import Cancion from "../models/Canciones.model.js";

// Crear una nueva canción
const CrearCancion = async (req, res) => {
    const data = req.body;
    try {
        const nuevaCancion = await Cancion.create(data);
        res.status(201).json(nuevaCancion); // Retornar 201 para recurso creado
    } catch (error) {
        console.error(error); // Usar console.error para errores
        res.status(400).json({ error: error.message }); // Mejorar el formato de error
    }
};

// Mostrar todas las canciones
const MostrarCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find(); // Retorna todas las canciones
        res.json(canciones);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message }); // Mejorar el formato de error
    }
};

// Buscar canción por ID
const BuscarPorId = async (req, res) => {
    const { id } = req.params; // Accedo a la variable
    try {
        const cancionPorId = await Cancion.findById(id); // Buscamos por id
        if (!cancionPorId) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }
        res.json(cancionPorId);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message }); // Mejorar el formato de error
    }
};

// Actualizar canción por ID
const ActualizarPorId = async (req, res) => {
    const { id } = req.params; // Accedo a la variable
    const data = req.body;
    try {
        const cancionActualizada = await Cancion.findByIdAndUpdate(id, data, { new: true });
        if (!cancionActualizada) {
            return res.status(404).json({ mensaje: "La canción no existe" });
        }
        res.json(cancionActualizada);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message }); // Mejorar el formato de error
    }
};

// Eliminar canción
const EliminarCancion = async (req, res) => {
    const { id } = req.params; // Accedo a la variable
    try {
        const cancionEliminada = await Cancion.findByIdAndDelete(id);
        if (!cancionEliminada) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }
        res.json({ mensaje: "Canción eliminada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message }); // Mejorar el formato de error
    }
};

export default {
    CrearCancion,
    MostrarCanciones,
    BuscarPorId,
    ActualizarPorId,
    EliminarCancion
};
