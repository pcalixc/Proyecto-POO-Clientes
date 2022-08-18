"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSchema = exports.LocalesSchema = exports.CategorySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaC = new mongoose_1.default.Schema({
    imagen: String,
    nombre: String,
    locales: (Array)
});
const schemaL = new mongoose_1.default.Schema({
    nombre: String,
    imagen: String,
    direccion: String,
    calificacion: Number,
    menu: (Array)
});
const schemaM = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    id2: String,
    nombre: String,
    imagen: String,
    descripcion: String,
    precio: Number,
    estado: String
});
exports.CategorySchema = mongoose_1.default.model('categorias', schemaC);
exports.LocalesSchema = mongoose_1.default.model('locales', schemaL);
exports.MenuSchema = mongoose_1.default.model('menus', schemaM);
