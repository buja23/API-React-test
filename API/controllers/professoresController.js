const express = require('express');
const router = express.Router();
const professoresService = require('../services/ProfessoresServices');

// Criar professor
router.post('/', async (req, res) => {
    const { nome, email, especialidade } = req.body;
    const sucesso = await professoresService.criarProfessor(nome, email, especialidade);
    if (sucesso) {
        res.status(201).json({ mensagem: 'Professor criado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao criar professor.' });
    }
});

// Listar todos os professores
router.get('/', async (req, res) => {
    const professores = await professoresService.listarProfessores();
    if (professores) {
        res.json(professores);
    } else {
        res.status(500).json({ mensagem: 'Erro ao listar professores.' });
    }
});

// Listar professor por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const professor = await professoresService.listarProfessorId(id);
    if (professor && professor.length > 0) {
        res.json(professor[0]);
    } else {
        res.status(404).json({ mensagem: 'Professor não encontrado.' });
    }
});

// Atualizar professor
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, especialidade } = req.body;
    const sucesso = await professoresService.atualizarProfessor(id, nome, email, especialidade);
    if (sucesso) {
        res.json({ mensagem: 'Professor atualizado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao atualizar professor.' });
    }
});

// Deletar professor
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const sucesso = await professoresService.deletarProfessor(id);
    if (sucesso) {
        res.json({ mensagem: 'Professor deletado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao deletar professor.' });
    }
});

module.exports = router;