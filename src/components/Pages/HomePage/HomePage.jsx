import React, { useEffect } from "react";
import { MessageCircle, Bot, Heart, Quote, UserPlus, User, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./HomePage.css";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  // ✅ Stop scrolling only on mobile, allow scroll on desktop
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const features = [
    {
      icon: <MessageCircle className="w-16 h-16 text-blue-300" />,
      title: "Chat with Volunteer",
      desc: "Talk to an Volunteer that listens, understands, and helps you unwind.",
      path: "/chat",
    },
    {
      icon: <Heart className="w-16 h-16 text-pink-300" />,
      title: "Mood Tracker",
      desc: "Track how you feel daily and see your emotional patterns.",
      path: "/mood",
    },
    {
      icon: <Quote className="w-16 h-16 text-yellow-300" />,
      title: "Relaxation Room",
      desc: "Quotes from great thinkers to brighten your mood.",
      path: "/relax",
    },
    {
      icon: <Bot className="w-16 h-16 text-green-300" />,
      title: "AI Companion",
      desc: "Have casual conversations and relax your mind.",
      path: "/ai",
    },
    {
      icon: <LogIn className="w-16 h-16 text-purple-300" />,
      title: "Login/Register",
      desc: "Join Echo and begin your journey to peace of mind.",
      path: "/Login",
    },
    {
      icon: <User className="w-16 h-16 text-orange-300" />,
      title: "Profile",
      desc: "Manage your profile and view your emotional journey.",
      path: "/profile",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Background Shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        {/* Glassmorphic Main Box */}
        <div className="home-box">
          <h1 className="home-title">Welcome to Echo</h1>

          <div className="home-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="home-card"
                onClick={() => navigate(feature.path)}
              >
                <div className="home-icon">{feature.icon}</div>
                <h2>{feature.title}</h2>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="home-footer desktop-footer">
            <p>“Echo — where your thoughts find peace.”</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
