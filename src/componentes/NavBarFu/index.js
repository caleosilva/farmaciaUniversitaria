import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarFU = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Farmácia Universitária</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>

          <Nav>
            <NavDropdown title="Medicamentos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Atualizar
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Estoque" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Registrar entrada</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Registrar saída</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Doador" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Buscar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Atualizar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Excluir</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Paciente" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Buscar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Atualizar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Excluir</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarFU;