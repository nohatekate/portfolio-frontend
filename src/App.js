
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


export default function App() {
  const URL = "<http://localhost:4000/>";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<About URL={URL} />} />
        <Route path='/about' element={<Projects URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

