const mongoose = require("mongoose");

const model = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    src : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        default : 4.9
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const products = mongoose.model("RestApi",model);
module.exports = products;