import express from "express"; 
import { addOrder, addUser, deleteUser, getCategories, getCategory, getLocales, getMenu, getUsers, updateUser } from "../controller/general.controller";

const router = express.Router(); 

router.get("/cat", getCategory); 
router.get("/users", getUsers); 
router.get("/locales", getLocales); 
router.get("/menus", getMenu); 

//funciones a utilizar
router.get("/:id", getCategories)

//agregar
router.post("/newuser", addUser)



//update
router.put("/:id", updateUser)
//delete
router.delete("/:id", deleteUser)

//agregar orden
router.put("/:id/ordenes", addOrder)

export default router;