const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * This file describes the layout of the product table in the database
 */

const requiredString = {
    type: String,
    required: true
}

const requiredNumber = {
    type: Number,
    required: true
}

const ProductSchema = new Schema({
    Id: requiredString,
    Brand: requiredString,
    ProductName: requiredString,
    CostPrice:{
        type: mongoose.Types.Decimal128,
        required: true
    },
    MSRP: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    QtyOnHand: requiredNumber,
    QtyOnBackOrder: requiredNumber,
    GraphicName: requiredString,
    Description: requiredString

},
{
    timestamps: true
});


const Product = mongoose.model('products', ProductSchema);
module.exports = Product;
