import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { RingLoader } from "react-spinners";
import { motion } from "framer-motion"; 


const VITE_EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID
const VITE_EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const VITE_EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [user, setuser] = useState("");
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loader, setLoader] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log("VITE_EMAIL_SERVICE_ID", VITE_EMAIL_SERVICE_ID);
    console.log("VITE_EMAIL_TEMPLATE_ID", VITE_EMAIL_TEMPLATE_ID);
    console.log("VITE_EMAIL_PUBLIC_KEY", VITE_EMAIL_PUBLIC_KEY);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setuser("");
          alert("Email sent successfully!")
          setLoader(false);
          form.current.reset();
        },
        (error) => {
          setLoader(false);
          alert(
            "Hey " +
              user +
              ",\nI am very sorry🙇‍♀️ but some error occurred😢!!! \nPlease send your mail to adarsh91094@gmail.com😃\nP.S. The website is on development phase that's why this happened."
          );
          form.current.reset();
          setuser("");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me" id="contact">
      <div className="c-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span id="c-me">Contact me</span>
          <div className="blur contact-blur"></div>
        </div>
      </div>
      {loader ? (
        <div className="contact-loader">
          <RingLoader
            color="#e05f08"
            loading={loader}
            size={250}
          />
        </div>
      ) : (
        <>
          <form ref={form} onSubmit={sendEmail}>
            <div className="c-right">
              <input
                type="text"
                name="user_name"
                className="user"
                onChange={(event) => setuser(event.target.value)}
                value={user}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                className="user"
                placeholder="Message"
                required
              />
              <input type="submit" id="ta" value="Send" className="button" />
              <span>{done && "Thanks for Contacting me"}</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
