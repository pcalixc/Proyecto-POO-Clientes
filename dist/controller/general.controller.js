"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrder = exports.deleteUser = exports.updateUser = exports.addUser = exports.getCategories = exports.getMenu = exports.getLocales = exports.getUsers = exports.getCategory = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const category_schema_1 = require("../model/category.schema");
const user_schema_1 = require("../model/user.schema");
//prueba imprimiendo categorias
const getCategory = (req, res) => {
    category_schema_1.CategorySchema.find({}, { imagen: true, nombre: true }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getCategory = getCategory;
//prueba imprimiendo usuarios
const getUsers = (req, res) => {
    user_schema_1.UserSchema.find({}).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getUsers = getUsers;
//
const getLocales = (req, res) => {
    category_schema_1.LocalesSchema.find({}).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getLocales = getLocales;
//
const getMenu = (req, res) => {
    category_schema_1.MenuSchema.find({}).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getMenu = getMenu;
//ver con id 
const getCategories = (req, res) => {
    category_schema_1.CategorySchema.find({ _id: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getCategories = getCategories;
//agregar ususario
const addUser = (req, res) => {
    const u = new user_schema_1.UserSchema({
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        direccion: "",
        metodoPago: "",
        ordenes: ""
    });
    u.save().then(SaveResponse => {
        res.send(SaveResponse);
        res.end();
    }).catch(error => {
        res.send({ error });
        res.end();
    });
};
exports.addUser = addUser;
//actualizar ususario
const updateUser = (req, res) => {
    user_schema_1.UserSchema.updateOne({ _id: req.params.id }, {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        direccion: req.body.direccion,
        metodoPago: req.body.metodoPago,
        ordenes: req.body.ordenes
    }).then(updateResponse => {
        res.send(updateResponse);
        res.end();
    }).catch(error => {
        res.send({ error });
        res.end();
    });
};
exports.updateUser = updateUser;
//eliminar
const deleteUser = (req, res) => {
    user_schema_1.UserSchema.remove({ _id: req.params.id }).then(removeResponse => {
        res.send({ removeResponse, message: "registro eliminado" });
        res.end();
    });
};
exports.deleteUser = deleteUser;
//agregar orden a un usuario
const addOrder = (req, res) => {
    user_schema_1.UserSchema.updateOne({ _id: req.params.id }, {
        $push: {
            ordenes: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
                nombre: req.body.nombre,
                imagen: req.body.imagen,
                precio: req.body.precio
            }
        }
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send({ error });
        res.end();
    });
};
exports.addOrder = addOrder;
