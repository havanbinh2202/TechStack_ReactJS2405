import Button from './components/Button/Button';
import './App.css';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';

function App() {
  return (
    <div className="App">
      <header>
                <h1>My Website</h1>
            </header>
            <main className="container">
                <p>Main content ................</p>
            </main>
            <Footer />
            <Copyright/>
    </div>
  );
}

export default App;
