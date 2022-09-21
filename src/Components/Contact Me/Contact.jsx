import React, { useContext, useRef, useState, Component } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_20pw79r",
        "template_wht4si9",
        form.current,
        "ICWPxkP9vkbMVlnhQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me" id="contact">
      {/* left side copy and paste from work section */}
      <div className="c-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
        </div>
      </div>
      {/* right side form */}
        <form ref={form} onSubmit={sendEmail} >
      <div className="c-right">
          <input type="text" name="user_name" className="user"  placeholder="Name" required/>
          <input type="email" name="user_email" className="user" placeholder="Email" required/>
          <textarea name="message" className="user" placeholder="Message" required/>
          <input type="submit" id="ta" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          
          
      </div>
        </form>
    </div>
  );
};

export default Contact;
