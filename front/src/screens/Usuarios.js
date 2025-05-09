import React, {useState, useEffect} from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../api";

const Usuario = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(
        () => {
            api.get("/usuarios")
                .then(response =>{
                    setUsuarios(response.data);
                })
                .catch(response => {
                    console.log("Erro ao consultar usuários!");
                });
        }
    );

    return (
        <Container>
            <h3>Lista de Usuários</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th></th>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr>
                            <td>{usuario.nome}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <Button variant="info" as={Link} 
                                    to="/consultar_usuario" state={usuario}>
                                    Consultar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Usuario;