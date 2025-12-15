/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/12/2025 - 14:06:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2025
    * - Author          : 
    * - Modification    : 
**/
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true,
        default: []
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    reviews: {
        type: Array,
        required: true,
        default: []
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numberOfReviews: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    productIsNew: {
        type: Boolean,
        required: true
    },
    stripeId: {
        type: String
    },
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema);
export default Product;