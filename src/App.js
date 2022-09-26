import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Loader from "react-loaders";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact Me/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext, useState, useEffect } from "react";
import "./App.scss";
import { Dna } from "react-loader-spinner";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
// import { XlviLoader } from "react-awesome-loaders";

function App() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="Loader">
          <Dna
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div
          className="App"
          style={{
            background: darkmode ? "var(--black)" : "",
            color: darkmode ? "white" : "",
          }}
        >
          <Navbar />
          <Home />
          <About />
          <Profile/>
          <Project />
          <Contact />
            <Footer />
            <ScrollButton/>
        </div>
      )}
    </>
  );
}

export default App;
