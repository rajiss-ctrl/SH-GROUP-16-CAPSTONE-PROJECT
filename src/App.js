import './App.css';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Product from './Pages/Product.js';
import Contact from './Pages/Contact.js';
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
