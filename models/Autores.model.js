// Importamos las definiciones de modelo y schema desde mongoose
import { model, Schema } from 'mongoose';


//MODELADO DE DATOS DEL ESQUEMA
const AutorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "¡El nombre es obligatorio!"],
        minLength: [3, "El nombre no puede ser menor a 3 carateres"],
    },
    apellido: {
        type: String,
        required: [true, "¡El apellido es obligatorio!"],
        minLength: [3, "El apellido no puede ser menor a 3 carateres"],
    },
    genero: {
        type:String,
        enum:["masculino","femenino"]
    },
}, { timestamps: true });



export default AutorSchema;