const express = require("express");
const router = express.Router();

//Controllers
const {getRecetas} = require('../controllers/RecetasController')


router.get('/', getRecetas);


module.exports = router
