const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");
const RecipeModel = sequelize.define(
    "recipes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
        },
        caloria: {
            type: DataTypes.FLOAT,
        },
        grasa: {
            type: DataTypes.FLOAT,
        },
        carbohidrato: {
            type: DataTypes.FLOAT,
        },
        proteina: {
            type: DataTypes.FLOAT,
        },
        hierro: {
            type: DataTypes.FLOAT,
        },

    },
    {
        timestamps: true,
    }
);
module.exports = {RecipeModel};
