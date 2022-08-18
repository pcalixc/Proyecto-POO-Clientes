"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaU = new mongoose_1.default.Schema({
    usuario: String,
    contrasena: String,
    direccion: String,
    metodoPago: String,
    ordenes: (Array)
});
exports.UserSchema = mongoose_1.default.model('usuarios', schemaU);
