import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Loader from 'react-loaders';
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact Me/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context';
import {useContext} from 'react';

function App() {
  const theme= useContext(themeContext);
  const darkmode = theme.state.darkMode;


  return (
    
      <div className="App"
      style={{
        background: darkmode? 'var(--black)':'',
        color: darkmode? 'white' : ''
      }}>
        <Navbar/>
        <Home/>
        <About/>
        
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    
  );
}

export default App;
