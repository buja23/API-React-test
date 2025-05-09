import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import api from '../api';

const NovoUsuario = () => {
    const [usuario, setUsuario] = useState({nome: '', email: '', senha: ''});

    const salvarUsuario = () => {
        try{
            api.post('/usuarios', usuario);
            alert("Usuário inserido!");
        } catch(e){
            console.log("Erro: "+e);
        }
        setUsuario({nome: "", email: "", senha: ""});
    }

    return(
        <Container>
            <h3>Novo Usuário</h3>
            <Row>
                <Col>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        name="nome" value={usuario.nome} 
                        onChange={(e) =>setUsuario({...usuario, nome: e.target.value})}/>
                </Col>
                <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        name="email" value={usuario.email}
                        onChange={(e) => setUsuario({...usuario, email: e.target.value})}/>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password"
                        name="senha" value={usuario.senha}
                        onChange={(e) => setUsuario({...usuario, senha: e.target.value})}/>
                </Col> 
            </Row>
            <Row className="mt-2">
                <Col>
                    <Button variant="success" onClick={salvarUsuario}> Salvar </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NovoUsuario;