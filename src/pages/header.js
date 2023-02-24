//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from 'react-router-dom';

const PROJECT_TYPE = process.env.REACT_APP_PROJECT_TYPE

function Header() {
  if(PROJECT_TYPE == "sip") {
    return (
      <Navbar id="myNavbar"  className="navbar navbar-default navbar-fixed-top" style={{ marginBottom: 0, witdh: '100%' }} role="navigation">
      <div className="container-fluid">
  
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav">
            <li><Link to="/"><strong>JGMDB Home</strong></Link></li>
            <li><Link to="/analysis/sip"><strong>Search</strong></Link></li>
              </ul>
         </div>
      </div>
    </Navbar>
    ) 
  } 
}

export default Header
