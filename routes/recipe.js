const express = require("express");
const router = express.Router();

//Controllers
const {getRecipes,postRecipe} = require('../controllers/RecipeController')


router.get('/', getRecipes);
router.post('/',postRecipe)


module.exports = router
