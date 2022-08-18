"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const psw = 't5w0109hs';
const dbname = 'Wizzy';
const uri = `mongodb+srv://pcalix:${psw}@prueba.xxf3p.mongodb.net/${dbname}?`;
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default
            .connect(uri)
            .then(result => console.log('se conecto a mongodb'))
            .catch(error => console.log(error));
    }
}
exports.Database = Database;
