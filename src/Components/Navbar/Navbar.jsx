import {React, useState} from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Navbar = () => {
  const [awesomeloader, setAwesomeLoader] = useState(false);

  

  return (
    <>
      <div className="n-wrapper">
        <div className="nav-left">
          <div className="blur nav-blur" style={{ background: "yellow" }}></div>
          <Link spy={true} to="home" smooth={true} activeClass="activeClass">
            {" "}
            <div className="n-name" > &lt;geeky01Adarsh/&gt;</div>
          </Link>
          <div className="n-toggle">
            <Toggle />
          </div>
        </div>
        <div className="nav-right">
          <div className="n-list">
            <motion.ul variants={container} initial="hidden" animate="show">
              <Link
                spy={true}
                to="home"
                smooth={true}
                activeClass="activeClass"
              >
                <motion.li className="nav-links" variants={item} >Home</motion.li>
              </Link>
              <Link spy={true} className="nav-links" to="about_sec" smooth={true}>
                <motion.li variants={item}>About</motion.li>
              </Link>
              <Link spy={true} className="nav-links" to="profile" smooth={true}>
                <motion.li variants={item}>Profiles</motion.li>
              </Link>
              <Link spy={true} className="nav-links" to="proj_sec" smooth={true}>
                <motion.li variants={item}>Projects</motion.li>
              </Link>
            </motion.ul>
          </div>
          <Link spy={true} to="contact" smooth={true}>
            <button className="button n-button">Contact Me</button>
          </Link>
        </div>
      </div>
      <div>{awesomeloader && <AwesomeHandlerParent />}</div>
    </>
  );
};

export default Navbar;
