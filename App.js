
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Navbar bg="warning" data-bs-theme = "dark">
      <Container>
        <Navbar.Brand href= "#home">React Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href = "#home">HOME</Nav.Link>
          <Nav.Link href = "#">LOGIN</Nav.Link>
          <Nav.Link href = "#">REGISTER</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
  } 
  
  export default App;
