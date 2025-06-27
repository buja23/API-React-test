const conexao = require('../db');

// Criar curso
async function criarCurso(nome, descricao, carga_horaria) {
    const sql = "INSERT INTO cursos (nome, descricao, carga_horaria) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, descricao, carga_horaria]);
        return true;
    } catch (err) {
        return false;
    }
}

// Listar todos os cursos
async function listarCursos() {
    const sql = "SELECT * FROM cursos";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

// Atualizar curso
async function atualizarCurso(id, nome, descricao, carga_horaria) {
    const sql = "UPDATE cursos SET nome = ?, descricao = ?, carga_horaria = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, descricao, carga_horaria, id]);
        return true;
    } catch (err) {
        return false;
    }
}

// Deletar curso
async function deletarCurso(id) {
    const sql = "DELETE FROM cursos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

// Listar curso por ID
async function listarCursoId(id) {
    const sql = "SELECT * FROM cursos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarCurso,
    listarCursos,
    atualizarCurso,
    deletarCurso,
    listarCursoId
};