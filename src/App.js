import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Components/Home/Contact';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='px-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
