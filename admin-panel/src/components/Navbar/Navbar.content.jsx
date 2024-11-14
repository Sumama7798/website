// NavbarContent.js
import React from 'react';
import { FolderDot, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavbarContent = ({ toggleDropdown, isDropdownOpen, closeDropdown }) => {
  return (
    <header className='navbar'>
      <div className='container'>
        <Link to='/' className='logo'>
          <FolderDot className='w-8 h-8 font-bold' />
          <span>Admin Panel</span>
        </Link>

        <nav className='flex items-center space-x-4'>
          <div className='relative inline-block text-left'>
            <button className='create-page-btn'
              
            >
              Create Page+
            </button>
          </div>

          <div className='relative inline-block text-left'>
            <button className='contact-us-btn'
              
            >
              Contact Us
            </button>
          </div>

          <div className='relative inline-block text-left'>
            <button className='about-us-btn'
              
            >
              About Us
            </button>
          </div>





          {/* Dropdown component */}
          <div className='relative inline-block text-left'>
            <button
              onClick={toggleDropdown}
              className='dropdown-btn'
            >
              Services We Offer↓
            </button>

            {isDropdownOpen && (
              <div
                className='dropdown-menu'
                onMouseLeave={closeDropdown} // Optional: closes when mouse leaves
              >
                <ul className='py-1'>
                  <li>
                    <a href='#' className='block px-4 py-2 text-sm hover:bg-emerald-600'>
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-4 py-2 text-sm hover:bg-emerald-600'>
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-4 py-2 text-sm hover:bg-emerald-600'>
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Log Out button */}
          <Link to='/login' className='logout-btn'>
            <LogOut className='w-6 h-6 text-red-500 hover:text-emerald-400' />
            
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavbarContent;