"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaC = new mongoose_1.default.Schema({
    imagen: String,
    nombre: String,
    locales: Array
});
/*
const schemaL = new mongoose.Schema<Locales>{
    nombre:        String,
    imagen:        String,
    direccion?:    String,
    calificacion?: Number,
    menu?:         Menu[],
    id2?:          String,
    descripcion?:  String,
    precio?:       Number,
}

const schemaM = new mongoose.Schema<Menu>{
    id2:         string,
    nombre:      string,
    imagen:      string,
    descripcion: string,
    precio:      number,
} */
exports.CategorySchema = mongoose_1.default.model('categorias', schemaC);
