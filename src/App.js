
import './App.css';

import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import UserFrom from './components/form/UserFrom';

function App() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">

          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Registration</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Me</NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/ratr.tr.9" target="_blank">Facebook Page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">You tube</NavDropdown.Item>

              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <UserFrom></UserFrom>
      </div>



    </div>

  );
}

export default App;
