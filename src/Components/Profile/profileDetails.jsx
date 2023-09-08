import achievementDetails from "./data/achievementDetails";
import ProfileHeading from "./ProfileHeading";
import CodingProfiles from "./data/codingProfiles";
import educationDetails from "./data/educationDetails";
import Hobbies from "./data/hobbies";
import programmingSkillsDetails from "./data/programmingSkillsDetails";
import "./Profile.css";
import { experienceData } from "./data/experienceData";

const profileDetails = [
  <div className="profile-screen-container" key="education">
    {educationDetails.map((educationDetails, index) => (
      <ProfileHeading
        heading={educationDetails.title}
        subHeading={educationDetails.subHeading}
        fromDate={educationDetails.duration.fromDate}
        toDate={educationDetails.duration.toDate}
        description={educationDetails.description}
      />
    ))}
  </div>,

  /* PROGRAMMING SKILLS */
  <div
    className="profile-screen-container programming-skills-container"
    key="programming-skills"
  >
    {programmingSkillsDetails.map((skill, index) => (
      <div className="skill-parent" key={index}>
        <div className="heading-bullet programming-bullet"></div>
        <span className="programming-skill">{skill.skill}</span>
        {/* <div className="skill-percentage">
          <div
            style={{ width: skill.ratingPercentage + "%" }}
            className="active-percentage-bar"
          ></div>
        </div> */}
      </div>
    ))}
  </div>,

  /* PROJECTS */
  <div className="profile-screen-container" key="achievements">
    {achievementDetails.map((achievementsDetails, index) => (
      <ProfileHeading
        key={index}
        heading={achievementsDetails.title}
        subHeading={achievementsDetails.subHeading}
        description={achievementsDetails.description}
        fromDate={achievementsDetails.duration.fromDate}
      />
    ))}
  </div>,

  // Coding Profiles
  <div className="profile-screen-container" key="coding-profiles">
    {CodingProfiles.map((CodingProfiles, index) => (
      <ProfileHeading
        key={index}
        heading={CodingProfiles.title}
        link={CodingProfiles.link}
      />
    ))}
  </div>,

  /* WORK EXPERIENCE */
  <div className="profile-screen-container" key="work-experience">
    <div className="experience-container">
      {experienceData.map((data) => {
        return (
          <div>
            <ProfileHeading
              heading={data.heading}
              subHeading={data.subHeading}
              fromDate={data.fromDate}
              toDate={data.toDate}
            />
            <div className="experience-description">
              <ul className="experience-description-list">
                {data.description.map((desc) => {
                  return (
                    <li className="experience-text">
                      <span className="profile-description-text">
                        {desc}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
      {/* <ProfileHeading
        heading={"GeeksforGeeks"}
        subHeading={"Technical Content Writer"}
        fromDate={"Jan 2022"}
        toDate={"June 2022"}
      />
      <div className="experience-description">
        <span className="profile-description-text">
          I have written around 23 articles and have improved around 60 articles
          during this tenure of my internship.
        </span>
        <span className="profile-description-text">
          I have written around 23 articles and have improved around 60 articles
          during this tenure of my internship.
        </span>
      </div> */}
    </div>
  </div>,

  /* Interests */
  <div className="profile-screen-container" key="interests">
    {Hobbies.map((Hobbies, index) => (
      <ProfileHeading
        heading={Hobbies.title}
        description={Hobbies.description}
      />
    ))}
  </div>,
];

export default profileDetails;
