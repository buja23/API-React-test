const conexao = require('../db');

// Criar professor
async function criarProfessor(nome, email, especialidade) {
    const sql = "INSERT INTO professores (nome, email, especialidade) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, email, especialidade]);
        return true;
    } catch (err) {
        return false;
    }
}

// Listar todos os professores
async function listarProfessores() {
    const sql = "SELECT * FROM professores";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

// Atualizar professor
async function atualizarProfessor(id, nome, email, especialidade) {
    const sql = "UPDATE professores SET nome = ?, email = ?, especialidade = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, email, especialidade, id]);
        return true;
    } catch (err) {
        return false;
    }
}

// Deletar professor
async function deletarProfessor(id) {
    const sql = "DELETE FROM professores WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

// Listar professor por ID
async function listarProfessorId(id) {
    const sql = "SELECT * FROM professores WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarProfessor,
    listarProfessores,
    atualizarProfessor,
    deletarProfessor,
    listarProfessorId
};