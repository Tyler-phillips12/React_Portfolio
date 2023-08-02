import React, { useState } from "react";
import "./contact.css"; // Import your CSS file for styling

export default function ContactForm() {
  // State variables to store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setIsFormSubmitted(true);
  };

  return (
    <div className="contact-form">
      {isFormSubmitted ? (
        <div className="form-submitted">
          <h3>Thank you for your message!</h3>
          <p>We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div class="container">
          <button class="center-button" type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}