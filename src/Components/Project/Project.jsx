import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { frontEndProjects } from "./projectData";

const Project = () => {
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

          <Swiper
            slidesPerView={2}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            grabCursor={true}
            className="project-slider"
          >
            {frontEndProjects.map((project) => {
              return (
                <SwiperSlide className="project-data">
                  <a
                    href={project.github_link}
                    target="_blank"
                    // rel="noreferrer"
                  >
                    <img src={project.image} className="spr-img" alt="" />
                  </a>
                  <p className="project-name">{project.name}</p>
                </SwiperSlide>
              );
            })}
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project;
