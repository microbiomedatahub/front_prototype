import { Navbar, Nav } from 'react-bootstrap';
import '../microbedb.css';

const PROJECT_TYPE = process.env.REACT_APP_PROJECT_TYPE

function Footer() {
  if(PROJECT_TYPE=="sip") {
    return (
      <footer className="footer">
        <div className="container">
        </div>  
      </footer>
    )
  }
}

export default Footer
