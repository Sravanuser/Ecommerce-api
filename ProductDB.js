const product = require("./Product.json");
const mongoose = require("mongoose");
const products = require("./Model/Model");
require("dotenv").config(); 

const start = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        await products.deleteMany();
        await products.create(product);
        console.log("Success");
    }
    catch(err){
        console.log(err);
    }
}

start();