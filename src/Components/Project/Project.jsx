import React from 'react'
import './Project.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import proj1 from '../../assests/img/proj1.png'
import proj2 from '../../assests/img/proj2.png'
import proj3 from '../../assests/img/proj3.png'
import {Pagination} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'
import { themeContext } from '../../Context';
import {useContext} from 'react';

const Project = () => {
  const theme= useContext(themeContext);
  const darkmode = theme.state.darkMode

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
            <SwiperSlide>
              <a
                href="https://github.com/geeky01adarsh/HTML_CSS"
                target="_blank"
                rel="noreferrer"
              >
                <img src={proj1} alt="" className="spr-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://github.com/geeky01adarsh/NOOB-CODERS"
                target="_blank"
                rel="noreferrer"
              >
                <img src={proj2} alt="" className="spr-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://github.com/geeky01adarsh/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={proj3} alt="" className="spr-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Project
