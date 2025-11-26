import React, { useState } from "react";

function Contact() {


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-header">
          <h1>Contact us</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="hero-input">
            <div>
              <input
                className="input-text"
                type="text"
                placeholder="Enter Your name"
                name="username"
                value={formData.username}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <input
                type="email"
                required
                placeholder="example@gmail.com"
                className="input-text"
                name="email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <textarea
                name="message"
                id="text-area"
                rows={10}
                className="input-text"
                placeholder="Enter Your Message"
                style={{ resize: "none", overflow: "auto" }}
                value={formData.message}
                onChange={handleInput}
              ></textarea>
            </div>
            <button type="submit" className="send-button">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
