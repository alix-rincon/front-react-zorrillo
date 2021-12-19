import './App.css';
import { Login } from './pages/Login/Login';
import { Fragment } from 'react';
import Formularioproducto from './pages/Product/Formularioproducto';
import ListProducts from './pages/Product/ListProducts';
import ListOrder from './pages/Order/ListOrder';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import TableProducts from './components/Table/TableProducts';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Main />} /> 
        <Route path="/createProduct" element={<Formularioproducto />} />     
        <Route path="/listProducts" element={<ListProducts />} />
        <Route path="/listOrder" element={<ListOrder />} /> 
        <Route path="/tableProducts/:id" element={<TableProducts />} />          
      </Routes>
  </BrowserRouter> 
  );
}

export default App;
