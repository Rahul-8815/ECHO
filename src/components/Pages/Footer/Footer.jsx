import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Floating blur background shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>

      <footer className="footer-content">
        <h2 className="footer-heading">Stay Connected 🌈</h2>

        {/* 3 Equal Cards in One Row */}
        <div className="footer-grid">
          <div className="footer-card">
            <h3 className="footer-title">About Echo</h3>
            <p className="footer-text">
              Echo is your peaceful digital space for emotional wellness.
              Connect with kind listeners, explore mindfulness, and rediscover
              your inner calm 🌿.
            </p>
          </div>

          <div className="footer-card">
            <h3 className="footer-title">What People Say 💬</h3>
            <p className="footer-quote">
              “Echo helped me feel supported during tough times.” —{" "}
              <b>Aarav</b>
            </p>
            <p className="footer-quote">
              “Talking here feels like chatting with a true friend.” —{" "}
              <b>Priya</b>
            </p>
            <p className="footer-quote">
              “A comforting experience of kindness and empathy.” —{" "}
              <b>Rohan</b>
            </p>
          </div>

          <div className="footer-card">
            <h3 className="footer-title">Our Volunteers 💖</h3>
            <ul className="footer-list">
              <li>🌟 <b>Dr. Ananya Kapoor</b> — Mental Health Advocate</li>
              <li>🌟 <b>Rahul Sen</b> — Certified Listener</li>
              <li>🌟 <b>Mira Patel</b> — Volunteer of the Year 2024</li>
            </ul>
          </div>
        </div>

        {/* Contact Section Below */}
        <div className="footer-contact">
          <div className="footer-contact-card">
            <h3 className="footer-title">Contact With Us 🌐</h3>
            <ul className="footer-list">
              <li>📧 support@echo.org</li>
              <li>📞 +91 98765 43210</li>
              <li>🌍 www.mindease.org</li>
            </ul>
            <div className="footer-icons">
              <a href="#" className="footer-icon"><Instagram /> Instagram</a>
              <a href="#" className="footer-icon"><Twitter /> Twitter</a>
              <a href="#" className="footer-icon"><Linkedin /> LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} <b>Echo</b>. Built with 💙 to nurture
          calm, empathy, and emotional wellness.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
