import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-responsive-container">
      <img
        className="about-mobile-image"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
      <img
        className="about-desktop-image"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
    </div>
  </div>
)

export default About
