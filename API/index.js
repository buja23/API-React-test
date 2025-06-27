const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Importando os controllers
const cursosRoutes = require('./routes/cursosRoutes');
const alunosRoutes = require('./routes/alunosRoutes');
const professoresRoutes = require('./routes/professoresRoutes');

// Usando as rotas
app.use('/cursos', cursosRoutes);
app.use('/alunos', alunosRoutes);
app.use('/professores', professoresRoutes);

// Rota padrão
app.get('/', (req, res) => {
    res.send('API de Gerenciamento de Cursos Online');
});

app.listen(port, () => {
    console.log('Servidor iniciado em http://localhost:'+port);
});