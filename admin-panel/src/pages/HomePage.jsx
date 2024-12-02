import { Bell, UserRound , LogOut, Settings } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const HomePage = () => {
  const clients = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      title: 'Software Engineer',
      department: 'Web dev',
      status: 'Active',
      role: 'Owner',
      profilePic: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    },
    // Add more client data as needed
  ];





  const [isOpen, setIsOpen] = useState(false);

  const ToggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="pl-[250px]"> {/* Adjusted padding to make room for the sidebar */}
      <div className='bg-gray-800 box-border h-20 flex items-center justify-between'>
        <h1 className="text-2xl font-bold text-gray-500 justify-center mb-5 pl-5">Welcome to the Admin Panel</h1>
        
        <div className='inline-block right-0 ml-auto mr-6'>
          <Link to='/messages' className='hover:text-emerald-400 transition duration-300 ease-in-out'>
             <Bell />  </Link>
          </div>  

          <div>
          <img onClick={ToggleDropdown}  className="inline-block cursor-pointer right-0 size-10 rounded-full ring-2 mr-3 ml-auto ring-white hover:ring-emerald-400 transition duration-300 ease-in-out"
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


      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-800">
      {/* Card 1 */}
      <div className="bg-gray-900 text-white p-4 rounded shadow-md">
        <div className="flex items-center">
          <div className="bg-gray-700 p-3 rounded-full">
            {/* Add an icon here */}
            <span className="text-2xl">👁️</span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">$3.456K</h2>
            <p className="text-sm text-gray-400">Total Views</p>
            <p className="text-green-500 text-xs mt-1">0.43% ↑</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-900 text-white p-4 rounded shadow-md">
        <div className="flex items-center">
          <div className="bg-gray-700 p-3 rounded-full">
            {/* Add an icon here */}
            <span className="text-2xl">🛒</span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">$45,2K</h2>
            <p className="text-sm text-gray-400">Total Profit</p>
            <p className="text-green-500 text-xs mt-1">4.35% ↑</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-900 text-white p-4 rounded shadow-md">
        <div className="flex items-center">
          <div className="bg-gray-700 p-3 rounded-full">
            {/* Add an icon here */}
            <span className="text-2xl">🛍️</span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">2.450</h2>
            <p className="text-sm text-gray-400">Total Product</p>
            <p className="text-green-500 text-xs mt-1">2.59% ↑</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-900 text-white p-4 rounded shadow-md">
        <div className="flex items-center">
          <div className="bg-gray-700 p-3 rounded-full">
            {/* Add an icon here */}
            <span className="text-2xl">👥</span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">3.456</h2>
            <p className="text-sm text-gray-400">Total Users</p>
            <p className="text-blue-500 text-xs mt-1">0.95% ↑</p>
          </div>
        </div>
      </div>
    </div>



    <div>
      

    <div className="p-4 bg-gray-600 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Client List</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Title</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Role</th>
            <th className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase">Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={client.profilePic}
                  alt={client.name}
                />
                <div>
                  <p className="text-gray-900 font-semibold">{client.name}</p>
                  <p className="text-sm text-gray-500">{client.email}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="text-gray-900">{client.title}</p>
                <p className="text-sm text-gray-500">{client.department}</p>
              </td>
              <td className="px-6 py-4">
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs font-semibold">
                  {client.status}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-900">{client.role}</td>
              <td className="px-6 py-4 text-right text-blue-500 hover:underline cursor-pointer">
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
      
      </div>   


          

    </div>
  );
};

export default HomePage;