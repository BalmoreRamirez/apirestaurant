const express = require("express");
const router = express.Router();

//Controllers
const {getRecipes, postRecipe, getRecipe, putRecipes,deleteRecipes} = require('../controllers/RecipeController')


router.get('/', getRecipes);
router.post('/', postRecipe);
router.get('/:id', getRecipe);
router.put('/:id', putRecipes);
router.delete('/:id',deleteRecipes)

module.exports = router
