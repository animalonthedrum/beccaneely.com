import { Link } from "gatsby"
import React from "react"


const Footer = () => (
  <footer className='footer'>
  <div className="col-1">
  © {new Date().getFullYear()} Becca Neely
    <ul>
        <Link
          to="/about"
        >
          About
        </Link>
        <Link
          to="/contact"
        >
          Contact
        </Link>
      </ul>
  </div>
  </footer>
)


export default Footer