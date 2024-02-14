import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="navbar-container" data-aos="zoom-in-left">
        <div className="Logo-main">
          <div className="nav-text">
            <a href='/'>THE MAD HATTER*</a>
          </div>
        </div>

        <div className="menu" onClick={toggleMenu}>
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </div>

        <div className={`main-item ${menuOpen ? 'show' : ''}`}>
          <div className="main-link"><a href="/">Home</a></div>
          <div className="main-link"><a href="/Home2">About</a></div>
          <div className="main-link"><a href="/">Solutions</a></div>
          <div className="main-link"><a href="/">Contact us</a></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
