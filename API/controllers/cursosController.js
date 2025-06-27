const express = require('express');
const router = express.Router();
const cursosService = require('../services/cursosServices');

// Criar curso
router.post('/', async (req, res) => {
    const { nome, descricao, carga_horaria } = req.body;
    const sucesso = await cursosService.criarCurso(nome, descricao, carga_horaria);
    if (sucesso) {
        res.status(201).json({ mensagem: 'Curso criado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao criar curso.' });
    }
});

// Listar todos os cursos
router.get('/', async (req, res) => {
    const cursos = await cursosService.listarCursos();
    if (cursos) {
        res.json(cursos);
    } else {
        res.status(500).json({ mensagem: 'Erro ao listar cursos.' });
    }
});

// Listar curso por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const curso = await cursosService.listarCursoId(id);
    if (curso && curso.length > 0) {
        res.json(curso[0]);
    } else {
        res.status(404).json({ mensagem: 'Curso não encontrado.' });
    }
});

// Atualizar curso
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, carga_horaria } = req.body;
    const sucesso = await cursosService.atualizarCurso(id, nome, descricao, carga_horaria);
    if (sucesso) {
        res.json({ mensagem: 'Curso atualizado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao atualizar curso.' });
    }
});

// Deletar curso
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const sucesso = await cursosService.deletarCurso(id);
    if (sucesso) {
        res.json({ mensagem: 'Curso deletado com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao deletar curso.' });
    }
});

module.exports = router;