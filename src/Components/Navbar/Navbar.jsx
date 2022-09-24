import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="nav-left">
          <div className="blur nav-blur" style={{background:'yellow'}}></div>
          <div className="n-name"> &lt;geeky01Adarsh/&gt;</div>
          <div className="n-toggle">
            <Toggle />
          </div>
        </div>
        <div className="nav-right">
          <div className="n-list">
            <ul>
              <Link
                spy={true}
                to="home"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Home</li>
              </Link>
              <Link spy={true} to="about_sec" smooth={true}>
                <li>About</li>
              </Link>
              <Link spy={true} to="profile" smooth={true}>
                <li>Profiles</li>
              </Link>
              <Link spy={true} to="proj_sec" smooth={true}>
                <li>Projects</li>
              </Link>
            </ul>
          </div>
          <Link spy={true} to='contact' smooth={true}>
                            
          <button className="button n-button">Contact Me</button>
                        </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
