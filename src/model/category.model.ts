import mongoose from "mongoose";

export interface WizzyCategorias {
    _id?: mongoose.Types.ObjectId;
    imagen:  string;
    nombre:  string;
    locales: Locales[];
}

export interface Locales {
    _id?: mongoose.Types.ObjectId;
    categoria:     string,
    nombre:        string;
    imagen:        string;
    direccion?:    string;
    calificacion?: number;
    menu?:         Menu[];
}

export interface Menu extends OrdenesAgregadas {
    _id: string;
    local:       string,
    id2:         string;
    nombre:      string;
    imagen:      string;
    descripcion: string;
    precio:      number;
    estado:      string;
}

export interface OrdenesAgregadas{
    _id?: string;
    nombre:      string;
    imagen:      string;
    precio:      number;
}
