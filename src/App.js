import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollButton from './components/scrollTop/ScrollTop';
import Cursor from './components/cursor/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Header/>
      <Navigation/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <ScrollButton/>
      <Footer/>
    </div>
  );
}

export default App;
