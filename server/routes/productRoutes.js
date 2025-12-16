/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/12/2025 - 14:20:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2025
    * - Author          : 
    * - Modification    : 
**/

import express from "express";


import Product from '../models/Product.js'


const productRoutes = express.Router();

const getProducts = async (req, res) => {
    const products = await Product.find({});
    
    // Transform products to match frontend expectations
 

    res.json({
        products
    })
}

productRoutes.route('/').get(getProducts);

export default productRoutes;
