import React from 'react'
import './NavHeader.css'

function NavHeader() {
  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default NavHeader