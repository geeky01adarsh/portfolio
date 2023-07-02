import React from "react";
import "./Footer.css";
import Wave from "../../assests/img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>geeky01adarsh@gmail.com</span>
        <div className="f-icons">
          <a
            href="http://www.github.com/geeky01adarsh"
            target="_blank"
            rel="noreferrer"
          >
            <Gitub className='f-in' color="white" size={"3rem"} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/geeky01adarsh/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className='f-in' color="white" size={"3rem"} />
          </a>
          <a
            href="http://www.instagram.com/geeky01adarsh"
            target="_blank"
            rel="noreferrer"
          >
            <Insta className='f-in' color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
