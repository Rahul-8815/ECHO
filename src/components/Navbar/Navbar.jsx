import React from "react";
import { Home, MessageCircle, User, Info, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 💻 Desktop Navbar */}
      <nav className="navbar-container desktop-nav">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <Home className="w-7 h-7 text-blue-300" />
          <span>Echo</span>
        </div>

        <div className="navbar-links">
          <button onClick={() => navigate("/login")}>
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </button>
          <button onClick={() => navigate("/register")}>
            <User className="w-5 h-5" />
            <span>Register</span>
          </button>
          <button onClick={() => navigate("/about")}>
            <Info className="w-5 h-5" />
            <span>About</span>
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Top Navbar */}
      <nav className="mobile-top-nav">
        <h1 className="mobile-app-name">Echo</h1>
      </nav>

      {/* 📱 Mobile Bottom Navbar (Updated Order & Icons) */}
      <nav className="mobile-bottom-nav">
        <button onClick={() => navigate("/")}>
          <Home className="w-6 h-6" />
          <span>Home</span>
        </button>
        <button onClick={() => navigate("/chat")}>
          <MessageCircle className="w-6 h-6" />
          <span>Chat</span>
        </button>
        <button onClick={() => navigate("/profile")}>
          <User className="w-6 h-6" />
          <span>Profile</span>
        </button>
        <button onClick={() => navigate("/about")}>
          <Info className="w-6 h-6" />
          <span>About</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
