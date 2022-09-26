import link from "../../assests/img/link.svg";
import { motion } from "framer-motion";
import './Profile.css'

const ProfileHeading = (props) => {
  return (
    <div className="profile-heading">
      <div className="profile-main-heading">
        <div className="heading-bullet"></div>
        <span>{props.heading ? props.heading : ""}</span>
        {props.fromDate ? (
          <div className="heading-date">
            {props.fromDate} {props.toDate ? <>{"-" + props.toDate}</> : <></>}
          </div>
        ) : (
          <div></div>
        )}

        {props.link ? (
          <div className="link-container">
            <a href={props.link} target="_blank" noreferrer>
              <motion.img
                whileHover={{ scale: 1.5 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={link}
                alt="link-to-profiles"
                className="link-icon"
              />
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="profile-sub-heading">
        <span>{props.subHeading ? props.subHeading : ""}</span>
      </div>
      <div className="profile-heading-description">
        <span>{props.description ? props.description : ""}</span>
      </div>
    </div>
  );
};

export default ProfileHeading;
