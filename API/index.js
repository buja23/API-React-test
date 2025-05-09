const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuarioRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', usuariosRouter);

app.listen(port, () => {
    console.log('Servidor iniciado em http://localhost:'+port);
});