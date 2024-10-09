import React from 'react';
import './ProfileCard.css'; // CSS ফাইলটি এখানে ইনপোর্ট করুন

const ProfileCard = ({ name, profession, description, profileImage, social }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={profileImage} alt={name} className="profile-image" />
      </div>
      <div className="profile-body">
        <h2 className="name">{name}</h2>
        <h4 className="profession">{profession}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="profile-footer">
        <a href={social.facebook} className="social-icon"><i className="fab fa-facebook"></i></a>
        <a href={social.twitter} className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href={social.instagram} className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default ProfileCard;
