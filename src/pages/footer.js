import { Navbar, Nav } from 'react-bootstrap';
import '../microbedb.css';

const PROJECT_TYPE = process.env.REACT_APP_PROJECT_TYPE

function Footer() {
  if(PROJECT_TYPE=="sip") {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">© MicrobeDB.JP project team 2019 | Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license (CC-BY-4.0)</p>
          <a href=""> <img src="/images/logo_nbdc.png" alt="nbdclogo" width="162.125" height="47.5" /></a>
        </div>  
      </footer>
    )
  } else if (PROJECT_TYPE=="a") {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">© MicrobeDB.JP project team 2019 | Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license (CC-BY-4.0)</p>
          <a href=""> <img src="/images/logo_nbdc.png" alt="nbdclogo" width="162.125" height="47.5" /></a>
        </div>  
      </footer>
    )
  } else if(PROJECT_TYPE=="b") {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">© MicrobeDB.JP project team 2019 | Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license (CC-BY-4.0)</p>
          <a href=""> <img src="/images/logo_nbdc.png" alt="nbdclogo" width="162.125" height="47.5" /></a>
        </div>  
      </footer>
    )
  } else if(PROJECT_TYPE=="c") {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">© MicrobeDB.JP project team 2019 | Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license (CC-BY-4.0)</p>
          <a href=""> <img src="/images/logo_nbdc.png" alt="nbdclogo" width="162.125" height="47.5" /></a>
        </div>  
      </footer>
    )
  }
}

export default Footer