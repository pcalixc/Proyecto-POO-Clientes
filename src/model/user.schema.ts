import mongoose from "mongoose"; 
import { OrdenesAgregadas } from "./category.model";


import { WizzyUsuarios} from "./user.model"

const schemaU = new mongoose.Schema<WizzyUsuarios>({ 
    usuario:       String,
    contrasena:    String,
    direccion:     String,
    metodoPago:    String,
    ordenes:       Array<OrdenesAgregadas>
}); 




export const UserSchema = mongoose.model('usuarios',schemaU);