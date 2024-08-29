import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation= ()=>{
const count= useSelector(state=> state.cart.value.length)

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={Link}>Redux Toolkit</Navbar.Brand>
        <Nav>
            <Nav.Link to="/products" as={Link}>Products</Nav.Link>
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Nav.Link to="/Cart" as={Link}>My Bag {count}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
     </Container>
    </Navbar>
    )
}

export default Navigation;