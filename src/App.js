
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
import SurveyForm from './pages/Surveyform';


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
            </Routes>

          </main>

        <Footer />
        <Copyright/>
    </div>
  );
}

export default App;
