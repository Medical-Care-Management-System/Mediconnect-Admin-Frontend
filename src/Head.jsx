import React from 'react';

const handleLogout = () => {
  console.log("User logged out");
  // Add your logout logic here
};

const Head = () => {
    
  return (
    <div className="flex justify-between items-center border border-white p-4">
      <header className="text-3xl">MediConnect Admin Portal</header>
      <button 
        className="bg-blue-500 h-10 w-20 text-white" 
        onClick={handleLogout}  // Ensure this is a function reference
      >
        Logout
      </button>
    </div>
  );
};

export default Head;
