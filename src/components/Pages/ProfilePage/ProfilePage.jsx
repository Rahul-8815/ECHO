import React, { useState } from "react";
import "./ProfilePage.css";
import Navbar from "../../Navbar/Navbar";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Rahul Maurya",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    country: "India",
    role: "Volunteer",
    joined: "January 2025",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        <div className="profile-box">
          <h1 className="logo">Your logo</h1>
          <h2 className="title">Profile</h2>

          <div className="profile-details">
            <p>
              <strong>Full Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Mobile:</strong> {user.phone}
            </p>
            <p>
              <strong>Country:</strong> {user.country}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <p>
              <strong>Joined:</strong> {user.joined}
            </p>
          </div>

          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        </div>

        {/* ✨ Edit Profile Modal */}
        {isEditing && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Edit Profile</h2>
              <form onSubmit={handleSave}>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label>Mobile</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />

                <label>Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="Volunteer">Volunteer</option>
                  <option value="User">User</option>
                </select>

                <div className="modal-buttons">
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;

