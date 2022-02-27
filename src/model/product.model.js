const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    des1:{type:String,required:true},
    des2:{type:String,required:true},
})

const Product = mongoose.model("product",productSchema);
module.exports = Product;

//product model