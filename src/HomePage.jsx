import React, { useState } from 'react';

// Sample doctor and hospital data
const initialDoctors = [
  { id: 1, name: 'Dr. Smith', specialized: 'Cardiology' },
  { id: 2, name: 'Dr. Johnson', specialized: 'Neurology' },
  { id: 3, name: 'Dr. Williams', specialized: 'Orthopedics' },
  { id: 4, name: 'Dr. Brown', specialized: 'Pediatrics' },
  { id: 5, name: 'Dr. Jones', specialized: 'Dermatology' },
  { id: 6, name: 'Dr. Garcia', specialized: 'Gastroenterology' },
  { id: 7, name: 'Dr. Miller', specialized: 'Psychiatry' },
  { id: 8, name: 'Dr. Davis', specialized: 'Ophthalmology' },
  { id: 9, name: 'Dr. Rodriguez', specialized: 'Radiology' },
  { id: 10, name: 'Dr. Martinez', specialized: 'Anesthesiology' },
  { id: 11, name: 'Dr. Wilson', specialized: 'Endocrinology' },
  { id: 12, name: 'Dr. Anderson', specialized: 'Infectious Disease' },
];

// Sample hospital data
const initialHospitals = [
  { id: 1, name: 'City Hospital', location: 'New York' },
  { id: 2, name: 'General Hospital', location: 'Los Angeles' },
  { id: 3, name: 'Sunset Clinic', location: 'Chicago' },
  { id: 4, name: 'Health Center', location: 'Houston' },
  { id: 5, name: 'Community Hospital', location: 'Phoenix' },
];

const HomePage = () => {
  const [doctorSearchTerm, setDoctorSearchTerm] = useState('');
  const [hospitalSearchTerm, setHospitalSearchTerm] = useState('');
  const [doctors] = useState(initialDoctors);
  const [hospitals] = useState(initialHospitals);

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(doctorSearchTerm.toLowerCase())
  );

  // Filter hospitals based on search term
  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(hospitalSearchTerm.toLowerCase())
  );

  return (
    <div>
      <header className='text-2xl font-bold mb-4'>Dashboard Overview</header>
      <div className='flex font-sans mb-4'>
        <div className='mr-8'>
          <div>Total Patients</div>
          <div>1000</div>
        </div>
        <div>
          <div>Total Doctors</div>
          <div>{doctors.length}</div>
        </div>
      </div>

      {/* Flex container for Manage Doctors and Manage Hospitals */}
      <div className='flex space-x-8 '>
        {/* Manage Doctors Section */}
        <div className='w-1/2' style={{ position: 'relative', top: '80px' }}>
          <div className='mb-4'>Manage Doctors</div>
          <div className='flex mb-4'>
            <div className='flex items-center max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
              <input
                type='text'
                placeholder='Search Doctor...'
                className='w-full px-4 py-2 border-none focus:outline-none'
                value={doctorSearchTerm}
                onChange={(e) => setDoctorSearchTerm(e.target.value)}
              />
              <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2'>
                Search
              </button>
            </div>
          </div>

          {/* Table for Doctors */}
          <div className='max-h-60 overflow-y-auto'>
            <table className='min-w-full bg-white border border-gray-300 table-fixed'>
              <thead>
                <tr>
                  <th className='border px-4 py-2 w-1/4'>Doctor ID</th>
                  <th className='border px-4 py-2 w-1/2'>Name</th>
                  <th className='border px-4 py-2 w-1/4'>Specialized</th>
                  <th className='border px-4 py-2 w-1/4'>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.length === 0 ? (
                  <tr>
                    <td colSpan={4} className='border px-4 py-2 text-center text-gray-500'>
                      No doctors found
                    </td>
                  </tr>
                ) : (
                  filteredDoctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td className='border px-4 py-2'>{doctor.id}</td>
                      <td className='border px-4 py-2'>{doctor.name}</td>
                      <td className='border px-4 py-2'>{doctor.specialized}</td>
                      <td className='border px-4 py-2'>
                        <button className='bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded'>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
                
              </tbody>
            </table>
          </div>
        </div>
        <div>
        ffffffffff    
        </div>

        {/* Manage Hospitals Section */}
        <div className='w-1/2' style={{ position: 'relative', top: '80px' }}>
          <div className='mb-4'>Manage Hospitals</div>
          <div className='flex mb-4'>
            <div className='flex items-center max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
              <input
                type='text'
                placeholder='Search Hospital...'
                className='w-full px-4 py-2 border-none focus:outline-none'
                value={hospitalSearchTerm}
                onChange={(e) => setHospitalSearchTerm(e.target.value)}
              />
              <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2'>
                Search
              </button>
            </div>
          </div>

          {/* Table for Hospitals */}
          <div className='max-h-60 overflow-y-auto'>
            <table className='min-w-full bg-white border border-gray-300 table-fixed'>
              <thead>
                <tr>
                  <th className='border px-4 py-2 w-1/4'>Hospital ID</th>
                  <th className='border px-4 py-2 w-1/2'>Name</th>
                  <th className='border px-4 py-2 w-1/4'>Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredHospitals.length === 0 ? (
                  <tr>
                    <td colSpan={3} className='border px-4 py-2 text-center text-gray-500'>
                      No hospitals found
                    </td>
                  </tr>
                ) : (
                  filteredHospitals.slice(0, 5).map((hospital) => (
                    <tr key={hospital.id}>
                      <td className='border px-4 py-2'>{hospital.id}</td>
                      <td className='border px-4 py-2'>{hospital.name}</td>
                      <td className='border px-4 py-2'>{hospital.location}</td>
                    </tr>
                  ))
                )}
                {filteredHospitals.length > 5 && (
                  <tr>
                    <td colSpan={3} className='border px-4 py-2 text-center text-gray-500'>
                      Showing {filteredHospitals.length} hospitals
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
