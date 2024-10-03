import React from 'react';
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const navigate = useNavigate();
  
      const handleLogout = () => {
        navigate('/login');
        console.log("User logged out");
        // Add your logout logic here
      };

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
