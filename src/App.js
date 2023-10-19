import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Skill from './components/Skill';
import First from './components/First';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <First />
      <Header />
      <About />
      <Work />
      <Skill />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
