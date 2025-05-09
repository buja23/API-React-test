import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import Contato from './screens/Contato';
import NovoUsuario from './screens/NovoUsuario';
import Usuarios from './screens/Usuarios';
import ConsultarUsuario from './screens/ConsultarUsuario';
import {Container, Nav, Navbar} from 'react-bootstrap';

function App() {
    return (
      <Router>
        <Navbar bg="primary" variant='dark' expand='lg'>
          <Container>
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
              <Nav.Link as={Link} to="/novo_usuario">Novo Usuário</Nav.Link>
              <Nav.Link as={Link} to="/usuarios">Usuários</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className='mt-4'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/novo_usuario" element={<NovoUsuario/>} />
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="/consultar_usuario" element={<ConsultarUsuario/>} />
          </Routes>
        </Container>
      </Router>
    );
}

export default App;
