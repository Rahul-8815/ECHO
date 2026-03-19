import React from "react";
import "./LoginPage.css";
import Navbar from "../../Navbar/Navbar";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const LoginPage = () => {
  return (
    <>
      <Navbar />

      <div className="login-container">
        {/* Soft floating shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        {/* Animated glass box */}
        <motion.div
          className="login-box"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1 className="logo" custom={0} variants={fadeUp}>
            ECHO 💙
          </motion.h1>

          <motion.h2 className="title" custom={0.1} variants={fadeUp}>
            Welcome Back 🌿
          </motion.h2>

          <motion.form custom={0.2} variants={fadeUp}>
            <label>Email</label>
            <input type="email" placeholder="youremail@gmail.com" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="forgot">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </motion.form>

          <motion.div className="divider" custom={0.3} variants={fadeUp}>
            <span>or continue with</span>
          </motion.div>

          <motion.div className="social-login" custom={0.4} variants={fadeUp}>
            <button className="social-btn">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
            </button>
            <button className="social-btn">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub"
              />
            </button>
            <button className="social-btn">
              <img
                src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                alt="Facebook"
              />
            </button>
          </motion.div>

          <motion.p className="register-text" custom={0.5} variants={fadeUp}>
            Don’t have an account yet?{" "}
            <a href="/register">Register for free</a>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
