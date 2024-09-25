import React from 'react';
import {  StatsIcon, AuthorizeIcon, ManageIcon, SettingIcon, WarningIcon, } from './Icons/icon.js';

const SideBar = ({ activeMenuItem, setActiveMenuItem }) => {
  const menuItems = [
    { name: 'Authorize Doctors', icon: <AuthorizeIcon /> },
    { name: 'Generate Reports', icon: <StatsIcon />  },
    { name: 'Manage Account', icon: <ManageIcon /> },
  ];

  const bottomItems = [
    { name: 'Suspecious Users', icon: <SettingIcon /> },
    { name: 'Warning', icon: <WarningIcon /> },
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white " style={{ width: '220px' }}>
      <div className="p-4 text-xl font-semibold">
        {/* Sidebar title or logo can be added here */}
      </div>
      <ul className="mt-6 pt-10">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveMenuItem(item.name)}
            className={`flex items-center p-2 cursor-pointer  ${
              activeMenuItem === item.name ? 'bg-transparent border bg-gray-700' : ''
            }`}
          >
            <div className="mr-4">
              {item.icon}
            </div>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="mt-60 pt-24">
        
        <ul className="mt-* pt-20">
            <hr className='border-blue-500'></hr>
          {bottomItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveMenuItem(item.name)}
              className={`flex items-center p-2 cursor-pointer hover:bg-gray-700 ${
                activeMenuItem === item.name ? 'bg-transparent border border-blue-500' : ''
              }`}
            >
              <div className="mr-4">
                {item.icon}
              </div>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
