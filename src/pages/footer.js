import { Navbar, Nav } from 'react-bootstrap';
import '../microbedb.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">© MicrobeDB.JP project team 2019 | Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license (CC-BY-4.0)</p>
        <a href=""> <img src="/assets/logo_nbdc.png" alt="nbdclogo" width="162.125" height="47.5" /></a>
      </div>  
    </footer>
  )
}

export default Footer