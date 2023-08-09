const jwt = require("jsonwebtoken");
const login = async (req, res) => {
    const user = {
        id: 1,
        name: "jose",
        email: "jose@gmail.com"
    }
    jwt.sign({user}, 'key', (err, token) => {
        res.json({
            token
        })
    })
}

module.exports = {login};


