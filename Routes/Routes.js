//Routers
const { Router } = require("express");
const { getData, queries } = require("../Controller/Controller")
const router = Router(); 

router.get("/",getData);

module.exports = router;