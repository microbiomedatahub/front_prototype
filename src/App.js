
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
//import './application_a.scss'

// プロジェクトCSS
// とりあえず全部インポートする。
// function App の中で使えば有効になる
import ProjectACss from './project_a_css';
import ProjectBCss from './project_b_css';
import ProjectCCss from './project_c_css';
import ProjectSipCss from './project_sip_css';

// ヘッダー
// Headerの中で、sip,a,b,c を切り替えてる
import Header from './pages/header'

// フッター
// Footerの中で、sip,a,b,c を切り替えてる
import Footer from './pages/footer'

// ランディング画面
// Portalの中で、sip,a,b,c を切り替えてる
import Portal from './pages/portal'

// 検索画面
import Metagenome  from './pages/analysis/metagenome_searchkit';
import Sip from './pages/analysis/sip_searchkit';

// about画面
import About from './pages/about';

const PROJECT_TYPE = process.env.REACT_APP_PROJECT_TYPE

function App() {
  if (PROJECT_TYPE=="sip") {
    return (
      <div className="App">
        <ProjectSipCss />
        <Header />
        
        <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/about" element={<About />} />
        <Route path="/analysis/sip" element={<Sip />} />
        </Routes>
        <Footer />
      </div>
    );
  } else if(PROJECT_TYPE=="a") {
    return (
      <div className="App">
        <ProjectACss />
        <Header />
        
        <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/about" element={<About />} />
        <Route path="/analysis/metagenome" element={<Metagenome />} />
        </Routes>
        <Footer />
      </div>
    );
  } else if (PROJECT_TYPE=="b") {
    return (
      <div className="App">
        <ProjectBCss />
        <Header />
        
        <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/about" element={<About />} />
        <Route path="/analysis/metagenome" element={<Metagenome />} />
        </Routes>
        <Footer />
      </div>
    );
  } else if(PROJECT_TYPE=="c") {
    return (
      <div className="App">
        <ProjectCCss />
        <Header />
        
        <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/about" element={<About />} />
        <Route path="/analysis/metagenome" element={<Metagenome />} />
        </Routes>
        <Footer />
      </div>
    );
  }

}

export default App;
