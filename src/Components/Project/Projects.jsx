import React from "react";
import "./Projects.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { frontEndProjects } from "./projectData";
import Tilt from "react-parallax-tilt";

/*
type ProjectDetails= {
    name:string, 
    github_url:string,
    live_url:string,
    img:image
}

*/

const ProjectCard = ({ projectDetails }) => {
  return (
    <div className="projectCard">
      <Tilt>
        <img
          className="projectCardImg"
          src={projectDetails.image}
          alt={projectDetails.name}
        />
        <div className="projectCardPop-up">
          <div className="projectCardName">{projectDetails.name}</div>
          <div className="projectCardDetails">
            {/* <div className="projectCardSeperator">
                =============
            </div> */}
            <div className="projectCardDesc">{projectDetails.desc}</div>
            <div className="projectCardLink">
              <button className="projectCardButton">
                <a className="projectCardGithub" href={projectDetails.github_link} target="_blank">
                  Github
                </a>
              </button>
              <button className="projectCardButton">
                <a className="projectCardLive" href={projectDetails.live_link} target="_blank">
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;

  return (
    <>
      <div className="blur proj-blur"></div>
      <div className="project">
        <div id="proj_sec">
          <span className="r-proj" style={{ color: darkmode ? "white" : "" }}>
            My Recent Projects
          </span>
          <div className="projects">
            {frontEndProjects.map((project) => {
              return <ProjectCard projectDetails={project} />;
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
