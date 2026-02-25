
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';


function App() {

  return (
    <>

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/Header" element={<Header/>} />
    <Route path="/Layout" element={<Layout/>} />
    <Route path="/Footer" element={<Footer/>} />
  </Routes>
    </>
  )
}

export default App;
