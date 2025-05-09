const conexao = require('../db');

async function criarUsuario(nome, email, senha) {
    const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, email, senha]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarUsuarios() {
    const sql = "SELECT * FROM usuarios";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarUsuario(id, nome, email, senha) {
    const sql = "UPDATE usuarios SET nome = ?, senha = ?, email = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, senha, email, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarUsuario(id) {
    const sql = "DELETE FROM usuarios WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarUsuarioId(id){
    const sql = "SELECT * FROM usuarios WHERE id = ?";
    try{
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarUsuario, listarUsuarios, atualizarUsuario, deletarUsuario, listarUsuarioId
};
