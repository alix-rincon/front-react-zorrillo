import './App.css';
import { Login } from './pages/Login/Login';
//import {Route} from 'react-router-dom';
//import Navbar from './components/Navbar/Navbar';
import { Fragment } from 'react';
import Formularioproducto from './pages/Product/Formularioproducto';

function App() {
  return (
    <Fragment>
      <div className='container mx-auto'>
          <Formularioproducto />
      </div>   
    </Fragment>  
  );
}

export default App;
