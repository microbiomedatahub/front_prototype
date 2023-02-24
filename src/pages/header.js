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
            <li><Link to="/"><strong>Project SIP Home</strong></Link></li>
            <li><Link to="/"><strong>Document</strong></Link></li>
            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><strong>Analysis</strong></a>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Comparative analysis: </li>
                <li><Link to="/analysis/sip">SIP sample</Link></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left" action="/search" role="search">
            <div className="form-group">
              <input type="text" className="form-control" name="q1" placeholder="e.g. hot spring, Enterococcus faecalis, psbA" size="40" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
  
        </div>
      </div>
    </Navbar>
    ) 
  } else if(PROJECT_TYPE == "a") {
    return (
      <Navbar id="myNavbar"  className="navbar navbar-default navbar-fixed-top" style={{ marginBottom: 0, witdh: '100%' }} role="navigation">
      <div className="container-fluid">
  
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav">
            <li><Link to="/"><strong>Project A Home</strong></Link></li>
            <li><Link to="/"><strong>Document</strong></Link></li>
            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><strong>Analysis</strong></a>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Comparative analysis: </li>
                <li><Link to="/analysis/metagenome">Metagenomic samples</Link></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left" action="/search" role="search">
            <div className="form-group">
              <input type="text" className="form-control" name="q1" placeholder="e.g. hot spring, Enterococcus faecalis, psbA" size="40" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
  
        </div>
      </div>
    </Navbar>
    ) 
  } else if(PROJECT_TYPE == "b") {
    return (
      <Navbar id="myNavbar"  className="navbar navbar-default navbar-fixed-top" style={{ marginBottom: 0, witdh: '100%' }} role="navigation">
      <div className="container-fluid">
  
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav">
            <li><Link to="/"><strong>Project B Home</strong></Link></li>
            <li><Link to="/"><strong>Document</strong></Link></li>
            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><strong>Analysis</strong></a>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Comparative analysis: </li>
                <li><Link to="/analysis/metagenome">Metagenomic samples</Link></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left" action="/search" role="search">
            <div className="form-group">
              <input type="text" className="form-control" name="q1" placeholder="e.g. hot spring, Enterococcus faecalis, psbA" size="40" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
  
        </div>
      </div>
    </Navbar>
    ) 
  } else if(PROJECT_TYPE == "c") {
    return (
      <Navbar id="myNavbar"  className="navbar navbar-default navbar-fixed-top" style={{ marginBottom: 0, witdh: '100%' }} role="navigation">
      <div className="container-fluid">
  
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav">
            <li><Link to="/"><strong>Project C Home</strong></Link></li>
            <li><Link to="/"><strong>Document</strong></Link></li>
            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><strong>Analysis</strong></a>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Comparative analysis: </li>
                <li><Link to="/analysis/metagenome">Metagenomic samples</Link></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left" action="/search" role="search">
            <div className="form-group">
              <input type="text" className="form-control" name="q1" placeholder="e.g. hot spring, Enterococcus faecalis, psbA" size="40" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
  
        </div>
      </div>
    </Navbar>
    ) 
  }

}

export default Header
