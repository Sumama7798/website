import React from 'react';
import { FolderDot, LogOut, Settings, Plus,ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

<ChevronDown />
const NavbarContent = ({ toggleDropdown, isDropdownOpen, closeDropdown }) => {
  return (
    <header className='navbar'>
      <div className='container'>

         <Link to='/' className='logo flex items-center '>
          <FolderDot className='mr-2 w-8 h-8 font-bold' />
          <span>   Admin Panel</span>
        </Link>

        <nav className='flex flex-col justify-between items-start mt-8 space-y-4'>

          <Link to='/' className='home-btn flex items-center'>
          Dashboard 
          </Link>



         {/* Dropdown for Create Page */}
         <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='create-page-btn flex items-center'
            >
              Create Page <ChevronDown size={30} className='ml-2' />
            </button>
            {isDropdownOpen && (
              <div
                className='dropdown  absolute top-full left-full mt-2 w-60  bg-gray-800 shadow-lg rounded-md'
                onMouseLeave={closeDropdown}
              >
                <Link
                  to='/IntroSection'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                 <li><span>Intro Section</span></li>
                </Link>

                <Link
                  to='/ServicesSection'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>Services Section</span></li>
                </Link>

                <Link
                  to='/IndustriesSection'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>Industries Section</span></li>
                </Link>

                <Link
                  to='/EngagementSection'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>Engagement Section</span></li>
                </Link>

                <Link
                  to='/ClientsSection'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>Clients Section</span></li>
                </Link>


                <Link
                  to='/PortfolioSection'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>Portfolio Section</span></li>
                </Link>

              </div>
            )}
          </div>

          <Link to='/messages' className='messages-btn'>
            Messages
          </Link>

          <Link to='/profile' className='about-us-btn'>
            Profile
          </Link>

          

          <Link to='/settings'  className='settings-dropdown-btn flex items-center'>
           Settings <Settings className='ml-2 left-1'/>
          </Link>

          

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
