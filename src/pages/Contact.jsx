import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { validateEmail } from "../utils/helpers.js";

export default function Contact() {

  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setUserName] = useState("");
  const [message, setMessage] = useState("");


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputValue.length === 0) {
      alert ("username, email, and message are required");
    }

    if (inputType === "user_email") {
      setEmail(inputValue);
    } else if (inputType === "user_name") {
      setUserName(inputValue);
    } else if (inputType === "user_message") {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      alert("username or email is invalid")
      return;
    }
    if (!message) {
      alert("Message is required.");
      return;
    }
    emailjs.sendForm('service_bwotmzn', 'template_q1tjkf6', form.current, 'YDOvY-Lk7P8bWkk1r')
      .then((result) => {
        console.log(result.text);
        alert("message sent!")
        setUserName("");
        setMessage("");
        setEmail("");
      }, (error) => {
        console.log(error.text);
        console.log("error sending message, try again!")
      });
  };

  return (

    <div className="contact">
      <h1 className="title">Contact Me</h1>
      <div className="contactinfo">
        <form action="" class="form" ref={form} onSubmit={sendEmail}>
          <div class="row">
            <label for="name">Your name:</label>
            <input type="text" onChange={handleInputChange} id="name" value={name} name="user_name" placeholder='name' required />
          </div>
          <div class="row">
            <label for="email">Your email:</label>
            <input type="email" onChange={handleInputChange} id="email" value={email} name="user_email" placeholder='email' required />
          </div>
          <div class="row">
            <label for="message">Your message:</label>
            <textarea rows="4" onChange={handleInputChange} id="message" value={message} name="user_message" placeholder='write message' />
          </div>
          <div class="row">
            <button onClick={sendEmail} id="formbtn" type="submit" value="Send" >Submit</button>
          </div>
        </form>
        <section class="mx-5 contactme">
          <p className="thanks">Thank you for checking out my website!</p>
          <p className="question">Want to get into contact? Reach me at the following:</p>
          <ul className="contactlist">
            <li>Phone: 757.536.5114</li>
            <li>Email: ab.pincus002@gmail.com</li>
          </ul>
          <p className="feedback">I'd love to hear your feedback!</p>
        </section>
      </div>
    </div>

  );
}
