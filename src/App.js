
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Nav.js'
import Home from './Home.js';
import Contact from './Contact.js';
import Product from './Product.js';
import About from './About.js';
import Footer from './Footer.js';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions/index.js';

function App() {
  const counterReducer=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch();
  return (

    <div className='App' >
    <h1>Counter {counterReducer}</h1>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
      
         <Nav/>
         <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>

        </Routes>
        <Footer/>
     
      {}
    </div>
    
  );
}

export default App;
