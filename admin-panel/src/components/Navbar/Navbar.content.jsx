import React from 'react';
import { FolderDot, LogOut, Settings, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';


const NavbarContent = () => {
  return (
    <header className='navbar'>
      <div className='container'>

         <Link to='/' className='logo flex items-center '>
          <FolderDot className='mr-2 w-8 h-8 font-bold' />
          <span>   Admin Panel</span>
        </Link>

        <nav className='flex flex-col justify-between items-start mt-8 space-y-4'>

          <Link to='/' className='home-btn flex items-center'>
          Home 
          </Link>



          <Link to='/create-page' className='create-page-btn flex items-center'>
            Create Page <Plus className='ml-2' />
          </Link>

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
