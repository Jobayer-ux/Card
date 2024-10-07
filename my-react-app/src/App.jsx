
import ProfileCard from './components/ProfileCard'
import './App.css'
function App() {
  const profileData = {
    name: "Damon J. Diez",
    jobTitle: "Web Developer",
    email: "Robert_clark@email.com",
    description: "As a web developer, my journey began with a fascination for crafting.",
    image: "/image.jpg",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  };

  return (
    
    <div className='profilecard'>
      <ProfileCard profileData={profileData} />
    </div>
    
  )
}

export default App
