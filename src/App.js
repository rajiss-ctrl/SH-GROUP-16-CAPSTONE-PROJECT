import './App.css';
import Home from './pages/home.js';
import About from './pages/About.js';
import Product from './pages/product.js';
import Contact from './pages/Contact.js';
import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
