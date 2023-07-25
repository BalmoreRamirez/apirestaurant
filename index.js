require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {db} = require('./config/mysql')
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//db()

app.use("/api/v1", require("./routes"));

app.get('/', (req, res) => {
    res.send('¡API de recetas funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}/api/v1`);
});

