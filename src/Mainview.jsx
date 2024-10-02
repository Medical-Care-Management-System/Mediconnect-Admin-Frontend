import React, { useState } from 'react';
import Head from './Head';
import SideBar from './SideBar';
import DoctorContainer from './DoctorContainer';
import AuthorizedDoctor from './AuthorizedDoctor';
import Filter from './Filter';
import HomePage from './HomePage';
import ManageAccount from './ManageAccount';

function Mainview() {
  const [activeMenuItem, setActiveMenuItem] = useState('Home'); // default active

  // Sample data
  const [doctorData, setDoctorData] = useState([
    { name: "John Smith", doctor_id: 12345 },
    { name: "Emily Clark", doctor_id: 12344 },
    { name: "William Johnson", doctor_id: 12343 },
  ]);

  // Function to remove the first doctor and update the doctorData state
  const removeFirstDoctor = () => {
    if (doctorData.length > 0) {
      const updatedData = doctorData.slice(1); // Remove the first doctor
      setDoctorData(updatedData); // Update state
    }
  };

  // Get the first doctor's ID
  const firstDoctorId = doctorData.length > 0 ? doctorData[0].doctor_id : null;

  return (
    <div className="flex min-h-screen"> {/* Ensure the main container takes the full viewport height */}
      <SideBar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem}  adminName={'Jason Robert'}/>
      <div className="flex-1 flex flex-col">
        <Head />
        <main className="flex-1 overflow-y-auto"> {/* Enable vertical scrolling */}
          {activeMenuItem === 'Home' && (
            <div className='px-7'>
              <HomePage/>
            </div>
          )}
          {activeMenuItem === 'Authorize Doctors' && (
            <div className="flex px-7">
              <div className='border border-gray-600' style={{ width: '300px' }}>
                <DoctorContainer doctorData={doctorData} />
              </div>
              <div className='px-1'></div>
              <div className='border border-gray-600 flex-1'>
                <AuthorizedDoctor doctorId={firstDoctorId} onDoctorAction={removeFirstDoctor} />
              </div>
            </div>
          )}
          {activeMenuItem === 'Generate Reports' && (
            <div className='px-7'>
              <Filter/>
            </div>
          )}
          {activeMenuItem === 'Manage Account' && ( 
            <ManageAccount />
          )}
        </main>
      </div>
    </div>
  );
}

export default Mainview;
