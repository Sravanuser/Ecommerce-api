const product = require("../Model/Model");

module.exports.getData = async(req,res) => {
    const {company,name } = req.query;
    const queryObject = {}
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex:name,$options:"i"};
    }
    const myData = await product.find(queryObject);
    res.json({myData}); 
}