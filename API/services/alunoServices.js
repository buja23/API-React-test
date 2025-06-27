const conexao = require('../db');

// Criar aluno
async function criarAluno(nome, email, data_nascimento) {
    const sql = "INSERT INTO alunos (nome, email, data_nascimento) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, email, data_nascimento]);
        return true;
    } catch (err) {
        return false;
    }
}

// Listar todos os alunos
async function listarAlunos() {
    const sql = "SELECT * FROM alunos";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

// Atualizar aluno
async function atualizarAluno(id, nome, email, data_nascimento) {
    const sql = "UPDATE alunos SET nome = ?, email = ?, data_nascimento = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, email, data_nascimento, id]);
        return true;
    } catch (err) {
        return false;
    }
}

// Deletar aluno
async function deletarAluno(id) {
    const sql = "DELETE FROM alunos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

// Listar aluno por ID
async function listarAlunoId(id) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarAluno,
    listarAlunos,
    atualizarAluno,
    deletarAluno,
    listarAlunoId
};
