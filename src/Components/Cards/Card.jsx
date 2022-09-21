import React from "react";
import "./Cards.css";
import { themeContext } from '../../Context';
import {useContext} from 'react';

const Card = ({ CardData }) => {

  const theme= useContext(themeContext);
  const darkmode = theme.state.darkMode;

  return (
    <div className="card" >
      <img src={CardData.emoji} alt="" />
      <span className="ClassTitle">{CardData.title}</span>
      <div className="c-skills">
        {CardData.skills.map((ele) => {
          return (
            <>
              <span> {ele} </span>
            </>
          );
        })}
      </div>
      <button className="c-btn">More</button>
    </div>
  );
};

export default Card;
