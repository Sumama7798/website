// Navbar.js
import React, { useState } from 'react';
import NavbarContent from './Navbar.content.jsx';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  // State for handling dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <NavbarContent
      toggleDropdown={toggleDropdown}
      isDropdownOpen={isDropdownOpen}
      closeDropdown={closeDropdown}
    />
  );
};

export default Navbar;
