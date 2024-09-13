import React from 'react';
import Head from './Head';
import SideBar from './SideBar';
import DoctorContainer from './DoctorContainer';
import AuthorizedDoctor from './AuthorizedDoctor';

function App() {
  return ( 
      <div className="flex">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Head />
          <main className="flex justify-items-center   ">
            <div className='border border-gray-600' style={{ width: '300px', height: '650px' }}>
              <DoctorContainer/>
            </div>
            <div className='px-1'>
            </div>
            <div className='border border-gray-600 ' style={{ width: '1000px', height: '650px' }}>
              <AuthorizedDoctor/>
            </div>

          </main>
        </div>
      </div>

  );
}

export default App;
