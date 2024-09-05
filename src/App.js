import Button from './components/Button/Button';
import './App.css';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Product from './components/pages/Product';
import Blog from './components/pages/Blogs';


function App() {
  return (
    <div className="App">
        <NavBar/>
          <main>
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/about-us' Component={About} /> 
              <Route path='/products' Component={Product}/>
              <Route path='/blogs' Component={Blog}/>
            </Routes>

          </main>

        <Footer />
        <Copyright/>
    </div>
  );
}

export default App;
