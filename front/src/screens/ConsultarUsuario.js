import React, {useState} from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const ConsultarUsuario = () => {
    const location = useLocation();
    const [usuario, setUsuario] = useState(location.state);

    const navigate = useNavigate();

    const alterarUsuario = () => {
        api.put('/usuarios/'+usuario.id, usuario)
            .then(() => alert("Registro alterado com sucesso!"));
        navigate(-1);
    }

    const excluirUsuario = () => {
        if (window.confirm("Tem certeza que deseja excluir o registro?")){
            api.delete('/usuarios/'+usuario.id)
                .then(() => alert("Registro excluído!"));
            navigate(-1);
        }
    }

    return(
        <Container>
            <h3>Consultar Usuário</h3>
            <Row>
                <Col>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        name="nome" value={usuario.nome}
                        onChange={(e) => setUsuario({...usuario, nome: e.target.value})}/>
                </Col>
                <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        name="email"value={usuario.email}
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
                    <Button variant="warning" onClick={alterarUsuario}> Alterar </Button>
                    <Button variant="danger" onClick={excluirUsuario}> Excluir </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ConsultarUsuario;