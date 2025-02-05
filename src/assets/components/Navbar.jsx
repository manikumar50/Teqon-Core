import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">TEQON CORE</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? "show" : ""}>
        <Link to={"/"} onClick={toggleMenu}><li>HOME</li></Link>
        <Link to={"/services"} onClick={toggleMenu}><li>SERVICES</li></Link>
        <Link to={"/about"} onClick={toggleMenu}><li>ABOUT US</li></Link>
        <Link to={"/contact-us"} onClick={toggleMenu}><li>CONTACT US</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;
