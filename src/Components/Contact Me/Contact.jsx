import React, { useContext, useRef, useState, Component } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [user, setuser] = useState("");
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_20pw79",
        "template_wht4si9",
        form.current,
        "ICWPxkP9vkbMVlnhQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setuser("");
          form.current.reset();
        },
        (error) => {
          console.log(user);
          alert(
            "Hey " +
              user +
              ",\nI am very sorry🙇‍♀️ but some error occurred😢!!! \nPlease send your mail to adarsh91094@gmail.com😃"
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
        </div>
      </div>
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
    </div>
  );
};

export default Contact;
