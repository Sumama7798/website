import React from 'react';
import { FolderDot, LogOut, Settings, ChevronDown, ChevronLeft, ChevronRight, Gauge, Mail,User,Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

<ChevronDown />
const NavbarContent = ({ toggleDropdown, isDropdownOpen, closeDropdown, toggleNavbar, isCollapsed, collapseNavbar }) => {
  return (
    <header className={`navbar ${isCollapsed ? 'collapsed' : ''} `} >
      <div>
      <div className='container flex items-center justify-between'>

         <Link to='/' className='logo flex items-center '>
          <FolderDot className='mr-2 w-8 h-8 font-bold' />

          {!isCollapsed && <span>Admin Panel</span>}
        </Link>

        {/* Collapse Button */}
        <button
            onClick={toggleNavbar}
            className='collapse-btn ml-2 mr-2 p-2 bg-gray-800 text-white rounded-md'
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
          </div>

        <nav className='flex flex-col justify-between items-start mt-8 space-y-4'>

          <Link to='/' className='home-btn flex items-center'>
          <Gauge className='mr-2 w-8 h-8 font-bold' />
          {!isCollapsed && <span>Dashboard</span>} 
          </Link>



         {/* Dropdown for Create Page */}
         <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='create-page-btn flex items-center'
            >
              <Layers className='mr-2 w-8 h-8 font-bold'/>
             {!isCollapsed && <span>Create Page  <ChevronDown size={30} className='ml-2 ' /></span> }    
            </button>
            {isDropdownOpen && (
              <div
                className='dropdown  absolute top-full left-full mt-2 w-60  bg-gray-800 shadow-lg rounded-md'
                onMouseLeave={closeDropdown}
              >
                <Link
                  to='/editHomePage'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                 <li><span>HomePage</span></li>
                </Link>

                <Link
                  to='/editAboutPage'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>AboutPage</span></li>
                </Link>

                <Link
                  to='/editBlogPage'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>BlogPage</span></li>
                </Link>

                <Link
                  to='/editServicesPage'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>ServicesPage</span></li>
                </Link>

                <Link
                  to='/editContactPage'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>ContactPage</span></li>
                </Link>

                <Link
                  to='/editFooter'
                  className='dropdown-item  px-1 py-4 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'
                >
                  <li><span>Footer</span></li>
                </Link>


              </div>
            )}
          </div>

          <Link to='/messages' className='messages-btn flex items-center'>
          <Mail className='mr-2 w-8 h-8 font-bold' />
          {!isCollapsed && <span>Messages</span>}
          </Link>

          <Link to='/profile' className='about-us-btn flex items-center'>
          <User  className='mr-2 w-8 h-8 font-bold' />
          {!isCollapsed && <span>Profile</span>}
          </Link>

          

          <Link to='/settings'  className='settings-dropdown-btn flex items-center'>
          <Settings   className='mr-2 w-8 h-8 font-bold' />
          {!isCollapsed && <span>Settings</span>}
          </Link>

          

          {/* Log Out button */}
          <Link to='/login' className='logout-btn mt-auto flex items-center'>
            <LogOut className='mr-2 w-8 h-8 text-red-500 hover:text-emerald-400' />
            {!isCollapsed && <span className='ml-2'>Logout</span>}  
          </Link>
        </nav>
      </div>
    </header>




      
  );
};

export default NavbarContent;
