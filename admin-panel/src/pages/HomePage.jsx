import { Bell, UserRound , LogOut, Settings } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="pl-[250px]"> {/* Adjusted padding to make room for the sidebar */}
      <div className='bg-gray-900 box-border h-20 flex items-center justify-between'>
        <h1 className="text-2xl font-bold justify-center mb-5 pl-5">Welcome to the Admin Panel</h1>
        
        <div className='inline-block right-0 ml-auto mr-6'>
          <Link to='/messages' className='hover:text-emerald-400 transition duration-300 ease-in-out'>
             <Bell />  </Link>
          </div>  

          <div>
          <img onClick={ToggleDropdown}  class="inline-block cursor-pointer right-0 size-10 rounded-full ring-2 mr-3 ml-auto ring-white hover:ring-emerald-400 transition duration-300 ease-in-out"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 bg-opacity-80 shadow-lg rounded z-100">
              <div className="container mx-auto px-4">
                <div className="mb-4">
                  <h3 className="font-bold text-lg flex items-center p-3">Admin Panel</h3>
                  <ul className="mt-auto">
                    <li><Link to='/profile' className='hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'><UserRound /> Profile</Link></li>
                    <li><Link to='/settings' className='hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'> <Settings />Settings</Link></li>
                    <li><Link to='/login' className='hover:text-emerald-400 transition duration-300 ease-in-out flex items-center p-3'> <LogOut />Logout</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          </div>
        
      </div>
      <div>
      <img className='w-full' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'></img>
      </div>
    </div>
  );
};

export default HomePage;