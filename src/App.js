import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Dishes } from './components/Dishes';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Review } from './components/Review';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id='home'>
        <Home/>
      </div>

      <div id='dishes'>
        <Dishes/>
      </div>

      <div id='about'>
        <About/>
      </div>

      <div id='menu'>
        <Menu/>
      </div>

      <div id='review'>
        <Review/>
      </div>

      <div id='footer'>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
