//Routers
const { Router } = require("express");
const { getData, queries } = require("../Controller/Controller")
const router = Router(); 

router.get("/products",getData);
router.get("/products/queries",queries);

module.exports = router;