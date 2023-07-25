const {RecipeModel} = require("../models/RecipeModel")

const getRecetas = async (req, res) => {
    try {
        const data = await RecipeModel.findAll();
        res.send({ data });
    } catch (e) {
        console.log(res, e);
    }
}

module.exports = {getRecetas};
