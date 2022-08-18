"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./modules/database");
const general_router_1 = __importDefault(require("./router/general.router"));
const database = new database_1.Database();
console.log(database.conectar);
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// 
app.use(express_1.default.json()); // mapea la inf en formato json
app.use(express_1.default.urlencoded({ extended: true })); // en url
app.use(express_1.default.static("Clientes"));
app.use('/', general_router_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server :D ');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
