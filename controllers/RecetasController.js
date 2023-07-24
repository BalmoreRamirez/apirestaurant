const {db} = require("../config/mysql");
const getRecetas = async (req, res) => {
    try {
        const sql = 'SELECT * FROM recetas'
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = {getRecetas};
