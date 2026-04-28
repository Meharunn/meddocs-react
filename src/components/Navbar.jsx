import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MedDocs</div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#journals">Journals</a></li>
        <li><a href="#ebooks">E-Books</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;