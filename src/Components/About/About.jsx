import React from "react";
import "./About.css";
import HeartEmoji from "../../assests/img/heartemoji.png";
import Glasses from "../../assests/img/glasses.png";
import Humble from "../../assests/img/humble.png";
import Card from "./Cards/Card";
import { useContext } from "react";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";

const CardData = [
    {
        emoji: HeartEmoji,
        title: "Developer",
        skills: ["JavaScript,", "Node,", "C++", "Python,", "MERN"],
    },
    {
        emoji: Glasses,
        title: "Competitive Programmer",
        skills: ["LeetCode: 1830+,", "CodeChef: 3*,", "Codeforces: Pupil"],
    },
    {
        emoji: Humble,
        title: "Content Writer",
        skills: ["Technical Content Writer,", "Book Reviewer,", "Travel Blogs"],
    },
];

const About = () => {
    const transition = { duration: 3, type: "spring" };
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;
    return (
        <>
            <div className="about" id="about_sec">
                <div className="left">
                    <span style={{ color: darkmode ? "white" : "" }}>
                        About Me
                    </span>
                    {/* <span> */}
                    {/* <span className="greet">Hey hi✨</span>
             <span className="greet"> First of all thank you so much for your interest in my
            portfolio!!! </span>
            <span className="greet">
            A brief intoduction of mine..., </span>
            <span className="greet">
            I am Adarsh Navneet Sinha,</span> 
            <span className="greet">
            a third-year engineering student from IIST Indore, pursuing my
            engineering with Computer Science as my major. I am highly interested in
            programming related stuff and I am currently learning full stack web
            development using MERN. Also, I possess a decent knowledge of DSA
            and have tried my hands over Competitive Programming.
            </span> */}
                    <span
                        className="greet"
                        style={{ color: darkmode ? "#ffffffc7" : "" }}
                    >
                        A full stack web developer with expertise in MERN Stack
                        development. I love building backend-rich websites. I
                        have around 1 year of experience. I am looking for
                        Software Developer Engineer roles for backend
                        development and full stack development roles.
                    </span>
                    {/* </span> */}
                    <a
                        href="https://drive.google.com/file/d/1150Df3aqvAKJIpSqfSUHrIyUWrBbKc0O/view?usp=sharing"
                        target="_blank"
                    >
                        <button className="button  a-btn">Get Resume</button>
                    </a>
                    <div
                        className="blur about-blur2"
                        style={{ background: "red" }}
                    ></div>
                </div>

                <div className="right-cards">
                    <div className="blur about-blur"></div>
                    <motion.div
                        initial={{ top: "-4rem" }}
                        whileInView={{ top: "-2rem" }}
                        transition={transition}
                        className="card1"
                    >
                        <Card CardData={CardData[0]} />
                    </motion.div>

                    <motion.div
                        initial={{ left: "-5rem" }}
                        viewport={{ margin: "0px" }}
                        whileInView={{ left: "0rem" }}
                        transition={transition}
                        className="card2"
                    >
                        <Card CardData={CardData[1]} />
                    </motion.div>

                    <motion.div
                        initial={{ top: "0rem", left: "20px" }}
                        whileInView={{ top: "20rem", left: "20rem" }}
                        transition={transition}
                        className="card3"
                    >
                        <Card CardData={CardData[2]} />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default About;
