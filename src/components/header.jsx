import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "../components/sideBar";

export default function HeaderTwo() {
  return (
    <div style={{marginBottom:'50px'}}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" color="#fb607f" >Parapharmacie SHOP</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link>
                <Sidebar />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
