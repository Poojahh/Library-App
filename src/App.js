import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/service" element={<ServicesPage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
