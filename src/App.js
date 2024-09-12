
import './App.css';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Blog from './pages/Blogs';
import Fan from './pages/Fan';
import SurveyForm from './pages/Survey';
import Regsiter from './pages/Register';
import Checkout from './pages/Checkout';


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
              <Route path='/fans' Component={Fan} />
              <Route path='/survey' Component={SurveyForm} />
              <Route path='/register' Component={Regsiter} />
              <Route path='/checkout' Component={Checkout} />

            </Routes>

          </main>

        <Footer />
        <Copyright/>
    </div>
  );
}

export default App;
