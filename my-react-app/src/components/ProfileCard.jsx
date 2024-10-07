import PropTypes from 'prop-types';

import './ProfileCard.css';

const ProfileCard = ({ profileData }) => {
  const { name, jobTitle, email, description, socialLinks, image } = profileData;

  return (
    <div className="profile-card">
      <div className="profile-header"></div>
      <div className="profile-content">
        <div className="profile-img">
          <img src={image} alt={name} />
        </div>
        <h2 className='title'>{name}</h2>
        <p className="job-title">{jobTitle}</p>
        <p className="email">{email}</p>
        <p className="description">{description}</p>
        <div className="social-icons">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    
  );
  
};
ProfileCard.propTypes = {
  profileData: PropTypes.shape({
    name: PropTypes.string.isRequired,       
    jobTitle: PropTypes.string.isRequired,   
    email: PropTypes.string.isRequired,     
    description: PropTypes.string,          
    socialLinks: PropTypes.shape({
      facebook: PropTypes.string,            
      linkedin: PropTypes.string,           
      instagram: PropTypes.string,           
    }),
    image: PropTypes.string,            
  }).isRequired, 
};


export default ProfileCard;
