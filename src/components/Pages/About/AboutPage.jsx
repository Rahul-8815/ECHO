import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { Heart, Smile, Brain, Wind, MessageSquare } from "lucide-react";
import "./AboutPage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="about-container">
        {/* Floating blur shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        {/* Glass box */}
        <motion.div
          className="about-box"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1 className="logo" custom={0} variants={fadeUp}>
            Echo 
          </motion.h1>

          <motion.h2 className="title" custom={0.1} variants={fadeUp}>
            About Us 
          </motion.h2>

          <motion.p className="about-intro" custom={0.2} variants={fadeUp}>
            Welcome to <strong>Echo</strong> — your safe and peaceful space in
            the digital world. We help you find calm, clarity, and connection
            through emotional support and mindfulness.
          </motion.p>

          {/* Mission */}
          <motion.div className="about-section" custom={0.3} variants={fadeUp}>
            <h3> Our Mission</h3>
            <p>
              To make emotional wellness accessible to everyone. Whether you’re
              feeling anxious, lonely, or just need a moment of peace —{" "}
              <strong>Echo</strong> is here to guide and support you.
            </p>
          </motion.div>

          {/* What We Offer */}
          <motion.div className="about-section" custom={0.4} variants={fadeUp}>
            <h3> What We Offer</h3>

            <div className="about-features">
              <div
                className="feature-card pulse-card"
                onClick={() => navigate("/relax")}
              >
                <Wind className="feature-icon text-cyan-300" />
                <h4>Relaxation Room</h4>
                <p>Calming activities and soothing reflections </p>
              </div>

              <div
                className="feature-card main-card pulse-card"
                onClick={() => navigate("/chat")}
              >
                <MessageSquare className="feature-icon text-blue-400" />
                <h4>Chat with Volunteers</h4>
                <p>Compassionate listeners ready to hear you </p>
              </div>

              <div
                className="feature-card pulse-card"
                onClick={() => navigate("/mood")}
              >
                <Smile className="feature-icon text-pink-400" />
                <h4>Mood Tracker</h4>
                <p>Understand and track your emotions </p>
              </div>

              <div
                className="feature-card pulse-card"
                onClick={() => navigate("/ai")}
              >
                <Brain className="feature-icon text-indigo-400" />
                <h4>AI Companion</h4>
                <p>Gentle conversations for self-reflection </p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div className="about-section" custom={0.5} variants={fadeUp}>
            <h3>💖 Our Philosophy</h3>
            <p>
              Every emotion matters. <strong>Echo</strong> is built on kindness,
              empathy, and understanding — a place where your feelings echo and
              are truly heard.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div className="about-footer" custom={0.6} variants={fadeUp}>
            <p>
              Feeling low or just need someone to talk to? Our volunteers are
              here for you 💌
            </p>
            <div className="btn-center">
              <button
                onClick={() => navigate("/chat")}
                className="about-btn flex items-center justify-center gap-3"
              >
                <Heart className="w-6 h-6 text-white" />
                Connect with a Volunteer
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
