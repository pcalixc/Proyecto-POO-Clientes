

import express, { Express, Request, Response } from 'express'; 
import dotenv from 'dotenv'; 
import { Database } from './modules/database'; 
import router from './router/general.router'; 


const database:Database= new Database(); 
console.log(database.conectar); 
dotenv.config(); 

const app: Express = express(); 
const port = process.env.PORT; 

// 
app.use(express.json()); // mapea la inf en formato json
app.use(express.urlencoded({extended:true})); // en url

app.use(express.static("Clientes"))
app.use('/', router)


app.get('/', (req: Request, res: Response) => { 
    res.send('Express + TypeScript Server :D '); 
}); 

app.listen(port, () => { 
    console.log(`[server]: Server is running at https://localhost:${port}`); 
});
