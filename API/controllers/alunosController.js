const express = require('express');
const router = express.Router();
const alunosService = require('../services/alunoServices');

// Criar aluno
router.post('/', async (req, res) => {
    const { nome, email, data_nascimento } = req.body;
    const sucesso = await alunosService.criarAluno(nome, email, data_nascimento);
    if (sucesso) {
        res.status(201).json({ mensagem: 'Aluno criado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao criar aluno.' });
    }
});

// Listar todos os alunos
router.get('/', async (req, res) => {
    const alunos = await alunosService.listarAlunos();
    if (alunos) {
        res.json(alunos);
    } else {
        res.status(500).json({ mensagem: 'Erro ao listar alunos.' });
    }
});

// Listar aluno por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const aluno = await alunosService.listarAlunoId(id);
    if (aluno && aluno.length > 0) {
        res.json(aluno[0]);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado.' });
    }
});

// Atualizar aluno
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, data_nascimento } = req.body;
    const sucesso = await alunosService.atualizarAluno(id, nome, email, data_nascimento);
    if (sucesso) {
        res.json({ mensagem: 'Aluno atualizado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao atualizar aluno.' });
    }
});

// Deletar aluno
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const sucesso = await alunosService.deletarAluno(id);
    if (sucesso) {
        res.json({ mensagem: 'Aluno deletado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao deletar aluno.' });
    }
});

module.exports = router;