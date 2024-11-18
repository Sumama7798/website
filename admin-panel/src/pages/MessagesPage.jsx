import React from 'react';

const MessagesPage = () => {
  // Sample user messages data
  const userMessages = [
    {
      id: 1,
      name: 'Alice Johnson',
      profilePic: 'https://images.unsplash.com/photo-1502767089025-6572583495d0?crop=faces&fit=facearea&facepad=2&w=48&h=48&q=80',
      message: 'Hello, I need some help with my account.',
      timestamp: '2024-11-18 10:45 AM',
    },
    {
      id: 2,
      name: 'Bob Smith',
      profilePic: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=facearea&facepad=2&w=48&h=48&q=80',
      message: 'Can you provide more details about the new features?',
      timestamp: '2024-11-18 11:15 AM',
    },
    {
      id: 3,
      name: 'Carla Gomez',
      profilePic: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=facearea&facepad=2&w=48&h=48&q=80',
      message: 'Thank you for the support!',
      timestamp: '2024-11-18 01:25 PM',
    },
  ];

  return (
    <div className="p-6 pl-[250px] bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Messages</h1>
      <div className="bg-gray-950  shadow-md rounded-lg p-4">
        {userMessages.map((user) => (
          <div
            key={user.id}
            className="flex items-start space-x-4 border-b pb-4 mb-4 last:border-b-0 last:pb-0"
          >
            <img
              src={user.profilePic}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <span className="text-sm text-gray-500">{user.timestamp}</span>
              </div>
              <p className="text-gray-700 mt-1">{user.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;