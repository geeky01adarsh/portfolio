import React from "react";
import "./Home.css";
import Vector1 from "../../assests/img/Vector1.png";
import Vector2 from "../../assests/img/Vector2.png";
// import boy from "../../assests/img/boy1.png";
import boy from "../../assests/profile1.gif";
import glassesimoji from "../../assests/img/glassesimoji.png";
import thumbup from "../../assests/img/thumbup.png";
import crown from "../../assests/img/crown.png";
import memo from "../../assests/img/memo.png";
import FloatingDiv from "../Floating Div/FloatingDiv";
import UilGithub from "@iconscout/react-unicons/icons/uil-github";
import UilLinkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import Typical from "react-typical";
import "../../App.scss";

import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const skills = [
    {
        img: crown,
        first: "Full Stack",
        last: "Developer",
    },
    {
        img: thumbup,
        first: "R&D",
        last: "Engineer",
    },
    {
        img: memo,
        first: "Technical",
        last: "Content Writer",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const Home = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;
    const transition = { duration: 3, type: "fade-in" };
    const animatedText = [
        "A",
        "d",
        "a",
        "r",
        "s",
        "h",
        " ",
        "N",
        "a",
        "v",
        "n",
        "e",
        "e",
        "t",
        " ",
        "S",
        "i",
        "n",
        "h",
        "a",
    ];

    const devProf = [
        "AI Enthusiast💪",
        1800,
        "Full Stack Developer😎",
        2000,
        "Technical Content Writer📝",
        1800,
        "R&D Engineer🤓",
        2000,
    ];

    return (
        <>
            <div className="home" id="home">
                <div className="i-left">
                    <div className="i-name">
                        <span style={{ color: darkmode ? "white" : "" }}>
                            Hey! I am
                        </span>
                        <motion.span
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="animated-text"
                        >
                            {animatedText.map((e) => {
                                return (
                                    <motion.span variants={item}>
                                        {e}
                                    </motion.span>
                                );
                            })}
                        </motion.span>
                        <span className="n3-child">
                            <Typical loop={Infinity} steps={devProf} />
                            with a knack of learning and exploring...
                        </span>
                    </div>
                    <Link spy={true} to="contact" smooth={true}>
                        <div>
                            <button className="button i-button i-btn2">
                                Get in touch
                            </button>
                        </div>
                    </Link>
                    <div className="i-img">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={(e) => {}}
                            onHoverEnd={(e) => {}}
                            href="http://www.github.com/geeky01adarsh"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <UilGithub
                                size={"5rem"}
                                color={"var(--yellow)"}
                                className="clk-img"
                            />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={(e) => {}}
                            onHoverEnd={(e) => {}}
                            href="https://www.linkedin.com/in/geeky01adarsh/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <UilLinkedin
                                size={"4.65rem"}
                                color={"var(--yellow)"}
                                className="clk-img"
                            />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={(e) => {}}
                            onHoverEnd={(e) => {}}
                            href="http://www.instagram.com/geeky01adarsh"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <UilInstagram
                                size={"4.65rem"}
                                color={"var(--yellow)"}
                                className="clk-img"
                            />
                        </motion.a>
                    </div>
                </div>

                {/* Right side of the homepage */}
                <div className="i-right">
                    {/* Developer GIF */}
                    <img src={boy} alt="" />

                    {/* glass emoji */}
                    <motion.img
                        initial={{ left: "-30%" }}
                        whileInView={{ left: "-10%" }}
                        transition={transition}
                        className="smart"
                        src={glassesimoji}
                        alt=""
                    />

                    {/* MERN Developer Div */}
                    <motion.div
                        initial={{ left: "100%" }}
                        whileInView={{ left: "65%" }}
                        transition={transition}
                        className="floating-div1"
                    >
                        <FloatingDiv skills={skills[0]} />
                    </motion.div>

                    {/* Competitive Programmer */}
                    <motion.div
                        initial={{ left: "-35%" }}
                        whileInView={{ left: "-5%" }}
                        transition={transition}
                        className="floating-div2"
                    >
                        <FloatingDiv skills={skills[1]} />
                    </motion.div>

                    {/* Technical Content Writer */}
                    <motion.div
                        initial={{ right: "-10%" }}
                        whileInView={{ right: "0%" }}
                        transition={transition}
                        className="floating-div3"
                    >
                        <FloatingDiv skills={skills[2]} />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Home;
