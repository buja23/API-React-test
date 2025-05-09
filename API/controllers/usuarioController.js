const usuarioService = require('../services/usuarioServices');

async function criarUsuario(req, res){
    try {
        const {nome, email, senha} = req.body;
        if(await usuarioService.criarUsuario(nome, email, senha)){
            res.status(201).json({mensagem : "Registro inserido!"});
        } else {
            res.status(500).json({erro : "Erro ao inserir usuário!"});
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao inserir usuário!"});
    }
}

async function listarUsuarios(req, res){
    try {
        const retorno = await usuarioService.listarUsuarios();
        if(!retorno){
            res.status(500).json({erro: "Erro ao listar usuários!"});
        } else{
            res.json(retorno);
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao listar usuários!"});
    }
}

async function listarUsuarioId(req, res) {
    try {
        const { id } = req.params;
        const retorno = await usuarioService.listarUsuarioId(id);
        if(!retorno){
            res.status(500).json({erro: "Erro ao buscar usuário!"});
        } else {
            res.json(retorno);
        }
    } catch (err){
        res.status(500).json({erro: "Erro ao buscar usuário!"});
    }
}

async function atualizarUsuario(req, res) {
    try{
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        if (await usuarioService.atualizarUsuario(id, nome, email, senha)){
            res.status(201).json({mensagem: "Registro alterado!"});
        } else {
            res.status(500).json({erro: "Erro ao atualizar usuário!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao atualizar usuário!"});
    }
}

async function deletarUsuario(req, res) {
    try{
        const { id } = req.params;
        if (await usuarioService.deletarUsuario(id)){
            res.status(201).json({mensagem: "Registro excluído!"});
        } else {
            res.status(500).json({erro: "Erro ao excluir usuário!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao excluir usuário!"});
    }
}

module.exports = {
    criarUsuario, listarUsuarioId, listarUsuarios, atualizarUsuario, deletarUsuario
}