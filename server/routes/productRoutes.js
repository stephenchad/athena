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

    const page  = parseInt(req.params.page)

    const perPage = parseInt(req.params.perPage)


    const products = await Product.find({});
    
    if (page && perPage) {
        const totalPages = Math.ceil(products.length / perPage);
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const paginatedProducts = products.slice(startIndex, endIndex);
        res.json({
            products: paginatedProducts, 
            pagination: {currentPage: page, totalPages}
        });
    }else{
        res.json({
            products,
            pagination: {}
        });
    }
}

productRoutes.route('/:page/:perPage').get(getProducts);
productRoutes.route('/').get(getProducts);

export default productRoutes;
