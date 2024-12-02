import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  // Fetch user details from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/admin/profile'); // API endpoint for user details
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white max-w-md mx-auto">
        <div className="flex items-center">
          
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg">User Details</h3>
          <p><span className="font-semibold">Role:</span> {user.role}</p>
          <p><span className="font-semibold">Joined:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;