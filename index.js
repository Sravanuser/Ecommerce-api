//Importing data
const express = require("express");
const cors = require("cors");
const routes = require("./Routes/Routes");
const mongoose = require("mongoose");
require("dotenv").config();
//initializing data
const app = express();
const PORT = process.env.PORT || PORT;
//mongoose connection
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected successfully"))
.catch((err)=>console.log(err))
//using middleware
app.use(express.json());
app.use(cors());
app.use("/",routes);
//listening at port
app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`);
})