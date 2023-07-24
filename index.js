
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {db} = require('./config/mysql');
const {getRecetas} = require('./controllers/RecetasController')

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('¡API de recetas funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

app.get('/recetas', getRecetas);