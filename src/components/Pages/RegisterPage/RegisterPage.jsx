import React, { useState } from "react";
import "./RegisterPage.css";
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

const RegisterPage = () => {
  const [role, setRole] = useState("user");
  const [useMobile, setUseMobile] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginMethod = useMobile ? `Mobile (${countryCode})` : "Email";
    alert(`Registered using ${loginMethod} as a ${role}`);
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        {/* Floating shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        {/* Glass box */}
        <motion.div
          className="register-box"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1 className="logo" custom={0} variants={fadeUp}>
            ECHO 💙
          </motion.h1>
          <motion.h2 className="title" custom={0.1} variants={fadeUp}>
            Create Account 🌿
          </motion.h2>

          <motion.form onSubmit={handleSubmit} custom={0.2} variants={fadeUp}>
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />

            {/* Toggle Email / Mobile */}
            {!useMobile ? (
              <>
                <label>Email</label>
                <input type="email" placeholder="username@gmail.com" required />
                <p className="switch-input">
                  Prefer using mobile number?{" "}
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => setUseMobile(true)}
                  >
                    Use Mobile
                  </button>
                </p>
              </>
            ) : (
              <>
                <label>Mobile Number</label>
                <div className="mobile-input-group">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="country-code"
                    required
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{6,15}"
                    required
                  />
                </div>
                <p className="switch-input">
                  Prefer using email?{" "}
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => setUseMobile(false)}
                  >
                    Use Email
                  </button>
                </p>
              </>
            )}

            <label>Password</label>
            <input type="password" placeholder="Password" required />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />

            {/* Role Selection */}
            <div className="role-section">
              <label className="role-label">Register as:</label>
              <div className="role-options">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={role === "user"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Normal User
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="volunteer"
                    checked={role === "volunteer"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Volunteer
                </label>
              </div>
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>
          </motion.form>

          <motion.div className="divider" custom={0.3} variants={fadeUp}>
            <span>or sign up with</span>
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
                src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                alt="Facebook"
              />
            </button>
          </motion.div>

          <motion.p className="login-text" custom={0.5} variants={fadeUp}>
            Already have an account? <a href="/login">Login here</a>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default RegisterPage;
