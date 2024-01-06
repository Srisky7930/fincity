import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="container">
      <div>
        <h1 className="title">Srikanth</h1>
      </div>
      <div>
        <ul className="nav-menu">
          <Link className="nav-link" to="/about">
            <li>About</li>
          </Link>
          <Link className="nav-link" to="/project">
            <li>Projects</li>
          </Link>
          <Link className="nav-link" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
