import portfolio from '../../assests/img/portfolio.png'
import chatApp from "../../assests/img/chat_app.gif"
import yt_productivity from "../../assests/img/yt_productivity.jpg"

export const frontEndProjects = [
    {
        name:"Portfolio",
        github_link:"https://github.com/geeky01adarsh/portfolio",
        live_link:"https://geeky01adarsh.netlify.app/",
        desc:"Portfolio website made using React",
        image:portfolio
    },
    {
        name:"Chat App",
        github_link:"https://github.com/geeky01adarsh/chat-app",
        live_link:"https://github.com/geeky01adarsh/chat-app?tab=readme-ov-file#final-output",
        desc:"A chat app, that allows end-to-end conversation.",
        image:chatApp
    },
    {
        name:"YT Productivity",
        github_link:"https://github.com/geeky01adarsh/yt-productivity",
        live_link:"https://youtu.be/UUg652XnlFo?si=kp_wYUxeIJpJokDc",
        desc:"A chrome extension that provides utility to bookmark videos and customize to any possible speed.",
        image:yt_productivity
    }
]

export const backEndProjects = []