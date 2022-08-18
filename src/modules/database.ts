import mongoose from 'mongoose';  

const psw= 't5w0109hs';
const dbname= 'Wizzy';

const uri= `mongodb+srv://pcalix:${psw}@prueba.xxf3p.mongodb.net/${dbname}?`

export class Database{  
    constructor() { 
        this.conectar(); 
    } 
 
    conectar(){ 
        mongoose  
        .connect(uri) 
        .then(result=>console.log('se conecto a mongodb')) 
        .catch(error=>console.log(error)); 
    } 
}