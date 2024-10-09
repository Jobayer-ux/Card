
import ProfileCard from './components/ProfileCard'; 
import './App.css';
function App() {
  const profiles = [
    {
      name: "Dawn J. Jenkins",
      profession: "Architect",
      description: "A creative architect with a passion for design.",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "John Doe",
      profession: "Web Developer",
      description: "Loves building user-friendly interfaces.",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Alice Smith",
      profession: "Graphic Designer",
      description: "Creates stunning visuals.",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
      }
    }
  ];

  return (
    <div className="App">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
}

export default App;
