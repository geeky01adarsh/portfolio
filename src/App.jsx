import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact Me/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext, useState, useEffect } from "react";
import "./App.scss";
import { Dna } from "react-loader-spinner";
import AnimatedCursor from "react-animated-cursor";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import Projects from "./Components/Project/Projects";

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
          <AnimatedCursor
            color="252, 166, 31"
            innerSize={12}
            outerSize={32}
            outerAlpha={0.2}
            innerScale={0.9}
            outerScale={2}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              ".bullet",
              {
                target: ".custom",
                options: {
                  innerSize: 12,
                  outerSize: 12,
                  color: "255, 255, 255",
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 2,
                },
              },
            ]}
            // outerStyle={{
            //   mixBlendMode: 'exclusion'
            // }}
          />

          <Navbar />
          <Home />
          <About />
          <Profile />
          {/* <Project /> */}
          <Projects/>
          <Contact />
          <Footer />
          <ScrollButton />
        </div>
      )}
    </>
  );
}

export default App;
