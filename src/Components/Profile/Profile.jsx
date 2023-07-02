import React, { useState } from "react";
import "./Profile.css";
import profileBullets from "./profileBullets";
import profileDetails from "./profileDetails";


const Profile = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return profileBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getProfileScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="profile-details-carousal"
      >
        {profileDetails.map((ProfileDetail) => ProfileDetail)}
      </div>
    );
  };

  return (
    <div className="profile-container profile">
      <div className="profile-content">
        <div className="profile-heading">
          <h3>My Profiles</h3>
        </div>
        <div className="profile-card">
          <div className="profile-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="profile-bullet-details">{getProfileScreens()}</div>
        </div>
      </div>
      <div className="profile-blur" style={{background:'orangered'}}></div>
    </div>
  );
};

export default Profile;
