const express = require("express");
const router = express.Router();
const {verifyToken} = require('../middleware/auth')

//Controllers
const {getRecipes, postRecipe, getRecipe, putRecipes, deleteRecipes} = require('../controllers/RecipeController')

router.get('/', getRecipes);
router.post('/', postRecipe);
router.get('/:id', getRecipe);
router.put('/:id', putRecipes);
router.delete('/:id', deleteRecipes)

module.exports = router
