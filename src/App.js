import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contactus from './Pages/Contactus/Contactus';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './NavBar/NavBar';
import Content from './Pages/ContentPage/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/content" element={<Content/>} />
          <Route path="/contact" element={<Contactus/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
