import './App.css';
import { Login } from './pages/Login/Login';
import { Fragment } from 'react';
import Formularioproducto from './pages/Product/Formularioproducto';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Main />} /> 
        <Route path="/createProduct" element={<Formularioproducto />} />     
      </Routes>
  </BrowserRouter> 
  );
}

export default App;
