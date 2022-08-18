import mongoose from "mongoose"; 


import { WizzyCategorias, Locales, Menu} from "./category.model"; 

const schemaC = new mongoose.Schema<WizzyCategorias>({ 
    
    imagen:  String,
    nombre:  String,
    locales: Array<Object>
}); 


const schemaL = new mongoose.Schema<Locales>({
    nombre:        String,
    imagen:        String,
    direccion:    String,
    calificacion: Number,
    menu:         Array<Object>
});

const schemaM = new mongoose.Schema<Menu>({
    _id: mongoose.Types.ObjectId, 
    id2:         String,
    nombre:      String,
    imagen:      String,
    descripcion: String,
    precio:      Number,
    estado:     String
})




export const CategorySchema = mongoose.model('categorias',schemaC);
export const LocalesSchema = mongoose.model('locales',schemaL);
export const MenuSchema = mongoose.model('menus',schemaM);