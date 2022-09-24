import React from "react";
import "./Togggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";
import { useContext, useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";
// import Pacman from "react-spinners/Pacman";
import { PacmanLoader } from "react-spinners";


const Toggle = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      theme.dispatch({ type: "toggle" });
      setLoading(false);
      console.log(loading);
    }, 1500);
  };
  return (
    <>
      <div className="toggle" onClick={handleClick}>
        <Moon />
        <Sun />
        <div
          className="t-button"
          style={darkmode ? { left: "2px" } : { right: "2px" }}
        ></div>
      </div>
      <div className="toggle-right-loader">
        <PacmanLoader
          color="var(--orange)"
          loading={loading}
          size={40}
        />
      </div>
    </>
  );
};

export default Toggle;
