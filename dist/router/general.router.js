"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const general_controller_1 = require("../controller/general.controller");
const router = express_1.default.Router();
router.get("/cat", general_controller_1.getCategory);
router.get("/users", general_controller_1.getUsers);
router.get("/locales", general_controller_1.getLocales);
router.get("/menus", general_controller_1.getMenu);
//funciones a utilizar
router.get("/:id", general_controller_1.getCategories);
//agregar
router.post("/newuser", general_controller_1.addUser);
//update
router.put("/:id", general_controller_1.updateUser);
//delete
router.delete("/:id", general_controller_1.deleteUser);
//agregar orden
router.put("/:id/ordenes", general_controller_1.addOrder);
exports.default = router;
