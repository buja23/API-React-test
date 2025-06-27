import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import Contato from './screens/Contato';
import Cursos from './screens/Cursos';
import Alunos from './screens/Alunos';
import Professores from './screens/Professores';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
    return (
      <Router>
        <Navbar bg="primary" variant='dark' expand='lg'>
          <Container>
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
              <Nav.Link as={Link} to="/cursos">Cursos</Nav.Link>
              <Nav.Link as={Link} to="/alunos">Alunos</Nav.Link>
              <Nav.Link as={Link} to="/professores">Professores</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className='mt-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/professores" element={<Professores />} />
          </Routes>
        </Container>
      </Router>
    );
}

export default App;
