import React from 'react';
import { FolderDot, LogOut, Settings, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Dropdown from '../../../../frontend/src/Dropdown/Dropdown.jsx';

const NavbarContent = ({ toggleDropdown, isDropdownOpen, closeDropdown }) => {
  return (
    <header className='navbar'>
      <div className='container'>

         <Link to='/' className='logo flex items-center '>
          <FolderDot className='mr-2 w-8 h-8 font-bold' />
          <span>   Admin Panel</span>
        </Link>

        <nav className='flex flex-col justify-between items-start mt-8 space-y-4'>

          <button className='home-btn flex items-center'>
            Home 
          </button>



          <button className='create-page-btn flex items-center'>
            Create Page <Plus className='ml-2' />
          </button>

          <button className='messages-btn'>
            Messages
          </button>

          <button className='about-us-btn'>
            About Us
          </button>

          

          <button  className='settings-dropdown-btn flex items-center'>
           Settings <Settings className='ml-2 left-1'/>
          </button>

          

          {/* Log Out button */}
          <Link to='/login' className='logout-btn mt-auto flex items-center'>
            <LogOut className='w-6 h-6 text-red-500 hover:text-emerald-400' />
            <span className='ml-2'>Logout</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavbarContent;
