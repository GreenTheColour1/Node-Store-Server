const mongoose = require('mongoose');
const { Schema } = mongoose;

const BrandSchema = new Schema({
    Id: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Brand = mongoose.model("brands", BrandSchema);
module.exports = Brand;
