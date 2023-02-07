
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './application_a.scss'

import Header from './pages/header'
import Footer from './pages/footer'
import Portal from './pages/portal'

//import Metagenome  from './pages/analysis/metagenome_searchkit';
import Sip from './pages/analysis/sip_searchkit';
import About from './pages/about';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/about" element={<About />} />
      <Route path="/analysis/sip" element={<Sip />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
