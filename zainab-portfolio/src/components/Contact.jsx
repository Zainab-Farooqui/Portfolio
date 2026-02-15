import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Sending:", formData);

  try {
    const response = await fetch("https://portfolio-backend-umu6.onrender.com/api/feedback", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Server response:", data);

    // ✅ THIS IS THE FIX
    if (response.ok) {
      alert("Message sent successfully!✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(data.error || "Failed to send message ❌");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message ❌");
  }
};


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h2 className="contact-heading">Contact</h2>
          <p>
            Feel free to reach out for collaborations, opportunities,
            or just a friendly hello 👋
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-card">
          {/* 🔴 IMPORTANT */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>

          <div className="contact-links">
            <a href="mailto:zainabfarooqui096@gmail.com">Email</a>
            <a href="https://github.com/Zainab-Farooqui">GitHub</a>
            <a href="https://www.linkedin.com/in/zainab-farooqui-40b118248/">LinkedIn</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
