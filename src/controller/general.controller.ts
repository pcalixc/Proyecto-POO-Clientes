import { Request, Response} from "express"; 
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { CategorySchema, LocalesSchema, MenuSchema } from "../model/category.schema"; 
import { UserSchema } from "../model/user.schema";


//prueba imprimiendo categorias
export const getCategory=(req:Request, res:Response)=>{ 
    CategorySchema.find({},{imagen: true, nombre: true}).then(result=>{ 
    res.send(result); 
    res.end(); 
}) 
    .catch(error=>console.log(error));  
} 

//prueba imprimiendo usuarios
export const getUsers=(req:Request, res:Response)=>{ 
    UserSchema.find({}).then(result=>{ 
    res.send(result); 
    res.end(); 
}) 
    .catch(error=>console.log(error));  
} 
//
export const getLocales=(req:Request, res:Response)=>{ 
    LocalesSchema.find({}).then(result=>{ 
    res.send(result); 
    res.end(); 
}) 
    .catch(error=>console.log(error));  
} 
//
export const getMenu=(req:Request, res:Response)=>{ 
    MenuSchema.find({}).then(result=>{ 
    res.send(result); 
    res.end(); 
}) 
    .catch(error=>console.log(error));  
} 


//ver con id 
export const getCategories=(req:Request, res:Response)=>{ 
    CategorySchema.find({_id: req.params.id}).then(result=>{ 
    res.send(result); 
    res.end(); 
}) 
    .catch(error=>console.log(error));  

} 

//agregar ususario
export const addUser=(req:Request, res:Response)=>{ 
    
    const u = new UserSchema(
        {
            usuario:       req.body.usuario,
            contrasena:    req.body.contrasena,
            direccion:     "",
            metodoPago:     "",
            ordenes:        ""
        
        });
        u.save().then(SaveResponse=>{
            res.send(SaveResponse);
            res.end();
        }).catch(error=>{
            res.send({error});
            res.end();
        })} 

 //actualizar ususario
export const updateUser=(req:Request, res:Response)=>{ 
    UserSchema.updateOne({_id: req.params.id},
        {
            usuario:       req.body.usuario,
            contrasena:    req.body.contrasena,
            direccion:     req.body.direccion,
            metodoPago:     req.body.metodoPago,
            ordenes:        req.body.ordenes
        
        }).then(updateResponse=>{
            res.send(updateResponse);
            res.end();
        }).catch(error=>{
            res.send({error});
            res.end();
        })} 


//eliminar
export const deleteUser=(req:Request, res:Response)=>{ 
    UserSchema.remove({_id: req.params.id}).then(removeResponse=>{
            res.send({removeResponse, message: "registro eliminado"});
            res.end();
        })} 

//agregar orden a un usuario
export const addOrder=(req:Request, res:Response)=>{
    UserSchema.updateOne({_id: req.params.id},
        {
            $push:{
                ordenes:{
                    _id: new mongoose.Types.ObjectId(req.body.id) ,
                    nombre: req.body.nombre,
                    imagen: req.body.imagen,
                    precio: req.body.precio
                }
            }
        }).then(result=>{
            res.send(result);
            res.end();
        }).catch(error=>{
            res.send({error});
            res.end();
        })
    }