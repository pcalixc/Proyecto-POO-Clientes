import { OrdenesAgregadas } from "./category.model";

export interface WizzyUsuarios{
    usuario:       string;
    contrasena:    string;
    direccion?:     string;
    metodoPago?:    string;
    ordenes:       Array<OrdenesAgregadas>;
}