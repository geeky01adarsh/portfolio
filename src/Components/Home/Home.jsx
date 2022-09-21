import React from "react";
import "./Home.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy1.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import FloatingDiv from "../Floating Div/FloatingDiv";
import Loader from "react-loaders";
import UilGithub from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const skills = [
  {
    img: crown,
    first: "React",
    last: "Developer",
  },
  {
    img: thumbup,
    first: "Competitive",
    last: "Programmer",
  },
];

const Home = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  const transition = { duration: 3, type: "spring" };

  return (
    <>
      <div className="home" id="home">
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkmode ? "white" : "" }}>Hey! I am</span>
            <span>Adarsh Navneet Sinha</span>
            <span>
              MERN Developer && Competitive Programmer with a kanck of learning
              and exploring new things...
            </span>
          </div>
          <Link spy={true} to="contact" smooth={true}>
            <div className="btn">
              <button className="button i-button i-btn2">Get in touch</button>
            </div>
          </Link>
          <div className="i-img">
            <a
              href="http://www.github.com/geeky01adarsh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/geeky01adarsh/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="http://www.instagram.com/geeky01adarsh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />

          <motion.img
            initial={{ left: "-30%" }}
            whileInView={{ left: "-10%" }}
            transition={transition}
            className="smart"
            src={glassesimoji}
            alt=""
          />

          <motion.div
            initial={{ left: "90%" }}
            whileInView={{ left: "75%" }}
            transition={transition}
            className="floating-div1"
          >
            <FloatingDiv skills={skills[0]} />
          </motion.div>
          <motion.div
            initial={{ left: "-35%" }}
            whileInView={{ left: "-20%" }}
            className="floating-div2"
          >
            <FloatingDiv skills={skills[1]} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
