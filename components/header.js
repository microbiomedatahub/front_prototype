import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {
  return (
<Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                  <img
                        src="../images/logo.png"
                        width="30%"
                        alt="React Bootstrap logo"
                    />
                  
                    Microbedb.jp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Document</Nav.Link>
                        <Nav.Link href="#pricing">Analysis</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
  
    
  );
}