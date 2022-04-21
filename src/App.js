import logo from './logo.svg';
import './App.css';
import Header from './components/Header.component';
import Main from './components/Main.component';
import Experience from './components/Experience';
import Footer from './components/Footer.component';

function App() {
  return (
    <div className='App'>
     <div className="comoponents">
       <Header/>
       <Main/>
       <Experience/>
       <Footer/>
     </div>
    </div>
  );
}

export default App;
