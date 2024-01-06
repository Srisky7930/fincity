import {Link} from 'react-router-dom'

import './index.css'

const About = () => (
  <>
    <div className="about-container">
      <div className="about-card">
        <h1> Hello, my name is Srikanth </h1>
        <p className="description">
          Aspiring for React js Developer | Nxtwave | Python Reactjs
        </p>
        <div>
          <Link to="/project">
            <button type="button"> Project </button>
          </Link>

          <button type="button" className="linkedin">
            Linkedin
          </button>
        </div>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1704530236/image_a1fhyz.png"
          alt="ing"
          className="image"
        />
      </div>
    </div>
  </>
)

export default About
