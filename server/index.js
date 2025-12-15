/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/12/2025 - 13:46:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2025
    * - Author          : 
    * - Modification    : 
**/
import dotenv from 'dotenv';
dotenv.config();


import connectToDatabase from './db.js';
import express from 'express';
import cors from "cors";

//Routes 
import productRoutes from './routes/productRoutes.js';


connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const port = 5000;

app.listen(port, () => {
    console.log(`Server runs on port ${port}`);
})