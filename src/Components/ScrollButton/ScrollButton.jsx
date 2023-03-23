import React, { useState } from "react";
import './ScrollButton.css'
import arrow from '../../assests/img/arrow.svg';


const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      
        <button
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
          className="scroll-btn" 
      >
        <img src={arrow} alt="move-up arrow" />
      </button>
      
    </>
  );
};

export default ScrollButton;
