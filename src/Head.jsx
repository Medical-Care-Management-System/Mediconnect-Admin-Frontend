import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Head = () => {
  const handleLogout = () => {
    console.log("User logged out");
    // You can add your additional logout logic here if needed.
  };

  return (
    <div className="flex justify-between items-center border border-white p-4">
      <header className="text-3xl">MediConnect Admin Portal</header>
      
      {/* Handle signed in and signed out states */}
      <div>
        <SignedOut>
          <SignInButton mode="modal" /> {/* Show SignInButton if the user is signed out */}
        </SignedOut>
        
        <SignedIn>
          <UserButton afterSignOutUrl="/" onSignOut={handleLogout} /> {/* Show UserButton if the user is signed in */}
        </SignedIn>
      </div>
    </div>
  );
};

export default Head;
