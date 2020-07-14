const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    QtyOnBackorder: requiredNumber,
    GraphicName: requiredString,
    Description: requiredString

},
{
    timestamps: true
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
