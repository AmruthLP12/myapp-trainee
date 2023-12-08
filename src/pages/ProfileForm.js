import React, { useState, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './CSS/ProfileForm.css'

const ProfileForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <div>
      <h2>Profile Form</h2>
      <form>
        <label htmlFor="profilePicInput" className="profile-icon" onClick={handleIconClick}>
          {profilePic ? (
            <div className="profile-img-container">
              <img src={profilePic} alt="Profile Preview" className="profile-img" />
            </div>
          ) : (
            <FaUserCircle size={50} />
          )}
        </label>
        <input
          type="file"
          id="profilePicInput"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </form>
    </div>
  );
};

export default ProfileForm;
