// Importamos las definiciones de modelo y schema desde mongoose
import { model, Schema } from 'mongoose';
import AutorSchema from './Autores.model.js';


//MODELADO DE DATOS DEL ESQUEMA
const CancionSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "¡El título es obligatorio!"],
        minLength: [3, "El nombre no puede ser menor a 3 carateres"],
    },
    autor: [AutorSchema],
    genero: {
        type: String,
        validate: {
            validator: (valor) => {
                console.log(valor);
                
                const generosAceptados = ['pop', 'rock'];
                return generosAceptados.includes(valor.toLowerCase());
            },
            message: props => `${props.value} no es un genero permitido`,
        },
    },
    duracion: {
        type: Number,
        required: [true, "¡La duración es obligatoria!"],
        max: [600, "Una canción no puede durar tanto"],
    },
    lanzamiento: {
        type: Date,
        required: [true, "¡La fecha de lanzamiento es obligatoria!"],
        max: [new Date(), "La fecha no puede ser futura"]
    }
}, { timestamps: true });


// Crea el modelo de Cancion
const Cancion = model("Cancion", CancionSchema);

// Exporta el modelo para usarlo en tu aplicación
export default Cancion;