import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">JEFFERY OF SKY</Link>
        <nav className="nav-links">
          <Link to="/">Music</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;