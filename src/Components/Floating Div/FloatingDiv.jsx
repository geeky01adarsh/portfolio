import React from "react";
import './floatingdiv.css'

const FloatingDiv = ({ skills }) => {
  

  return (
    <>
      <div className="floatingdiv">
        
              <img src={skills.img} alt="newimg" className="skill-img" />
              <span>
                {skills.first}

                <br />
                {skills.last}
              </span>
            
      </div>
    </>
  );
};

export default FloatingDiv;
