"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controller/category.controller");
const router = express_1.default.Router();
router.get("/cat", category_controller_1.getCategory);
router.get("/users", category_controller_1.getUsers);
router.get("/locales", category_controller_1.getLocales);
router.get("/menus", category_controller_1.getMenu);
//funciones a utilizar
router.get("/:id", category_controller_1.getCategories);
//agregar
router.post("/", category_controller_1.addUser);
//update
router.put("/:id", category_controller_1.updateUser);
//delete
router.delete("/:id", category_controller_1.deleteUser);
//agregar orden
router.put("/:id/ordenes", category_controller_1.addOrder);
exports.default = router;
