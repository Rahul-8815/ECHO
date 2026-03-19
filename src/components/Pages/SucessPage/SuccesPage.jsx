import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "./SuccessPage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto redirect after few seconds
    const timer = setTimeout(() => navigate("/"), 7000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="success-container">
        {/* Background shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        {/* Glassmorphic box */}
        <motion.div
          className="success-box"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div
            className="success-icon"
            custom={0}
            variants={fadeUp}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              duration: 1,
            }}
          >
            <CheckCircle className="checkmark" />
          </motion.div>

          <motion.h1 className="success-title" custom={0.1} variants={fadeUp}>
            Registration Successful 🎉
          </motion.h1>

          <motion.p className="success-message" custom={0.2} variants={fadeUp}>
            Welcome to <strong>Echo</strong> — your space for calm, clarity,
            and connection. We’re so glad you’re here 💙
          </motion.p>

          <motion.div className="success-actions" custom={0.3} variants={fadeUp}>
            <button className="home-btn" onClick={() => navigate("/")}>
              Go to Home
            </button>
            <button className="dashboard-btn" onClick={() => navigate("/profile")}>
              View Profile
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessPage;
