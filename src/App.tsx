import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Topsection from './components/Topsection';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
