import React, { useState } from 'react'; 
import { ArrowDownRight, ExternalLink } from 'lucide-react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-emerald-400 px-4 py-2 rounded hover:bg-emerald-400 hover:text-orange-200 transition duration-300 ease-in-out"
      >
        Industries We Serve
        <ArrowDownRight />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute left-full top-full mt-2 ml-2 w-max bg-gray-800 bg-opacity-80 shadow-lg rounded z-100">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <h3 className="font-bold text-lg">Target Industries</h3>
              <ul className="mt-auto">
                <li className="hover:underline mb-2">Fintech</li>
                <li className="hover:underline mb-2">Real Estate</li>
                <li className="hover:underline mb-2">e-Commerce</li>
                <li className="hover:underline mb-2">On-Demand</li>
                <li className="hover:underline mb-2">Healthcare</li>
                <li className="hover:underline mb-2">Food & Grocery</li>
                <li className="hover:underline mb-2">Education</li>
                <li className="hover:underline mb-2">Travel & Tourism</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Project Case Studies</h3>
              <ul className="mt-2">
                <li className="px-2 py-1 rounded mb-2">Column</li>
                <li className="px-2 py-1 rounded mb-2">Shield Republic</li>
                <li className="px-2 py-1 rounded mb-2">GlobalReader</li>
                <li className="px-2 py-1 rounded mb-2">Homepie</li>
                <li className="px-2 py-1 rounded mb-2">Stitch</li>
              </ul>
            </div>

            <div className="mt-4 p-2 rounded flex items-center">
              <div>
                <h3 className="font-semibold">Working In A Different Industry?</h3>
                <p className="text-sm">Our teams can offer solutions tailored to your needs. Connect with us to learn more.</p>
              </div>
              <ExternalLink className="ml-auto text-blue-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;