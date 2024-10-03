import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {  DoctorIcon,Patient } from './Icons/icon.js';

// Sample doctor and hospital data
const initialDoctors = [
  { id: 1, name: 'Dr. Smith', specialized: 'Cardiology', rating: 4.5 },
  { id: 2, name: 'Dr. Johnson', specialized: 'Neurology', rating: 4.7 },
  { id: 3, name: 'Dr. Williams', specialized: 'Orthopedics', rating: 4.3 },
  { id: 4, name: 'Dr. Brown', specialized: 'Pediatrics', rating: 4.9 },
  { id: 5, name: 'Dr. Jones', specialized: 'Dermatology', rating: 4.8 },
  { id: 6, name: 'Dr. Garcia', specialized: 'Gastroenterology', rating: 4.6 },
  { id: 7, name: 'Dr. Miller', specialized: 'Psychiatry', rating: 4.2 },
  { id: 8, name: 'Dr. Davis', specialized: 'Ophthalmology', rating: 4.4 },
  { id: 9, name: 'Dr. Rodriguez', specialized: 'Radiology', rating: 4.1 },
  { id: 10, name: 'Dr. Martinez', specialized: 'Anesthesiology', rating: 4.7 },
  { id: 11, name: 'Dr. Wilson', specialized: 'Endocrinology', rating: 4.3 },
  { id: 12, name: 'Dr. Anderson', specialized: 'Infectious Disease', rating: 4.6 },
];

// Sample hospital data
const initialHospitals = [
  { id: 1, name: 'City Hospital', location: 'New York', rating: 4.5 },
  { id: 2, name: 'General Hospital', location: 'Los Angeles', rating: 4.6 },
  { id: 3, name: 'Sunset Clinic', location: 'Chicago', rating: 4.7 },
  { id: 4, name: 'Health Center', location: 'Houston', rating: 4.4 },
  { id: 5, name: 'Community Hospital', location: 'Phoenix', rating: 4.2 },
];

const HomePage = () => {
  const [doctorSearchTerm, setDoctorSearchTerm] = useState('');
  const [hospitalSearchTerm, setHospitalSearchTerm] = useState('');
  const doctors = initialDoctors
  const [hospitals] = useState(initialHospitals);


  // Filter doctors based on search term
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(doctorSearchTerm.toLowerCase())
  );

  // Filter hospitals based on search term
  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(hospitalSearchTerm.toLowerCase())
  );

  const rating = (val) => {
    return (
      <Stack spacing={1}>
        <Rating name="half-rating-read" defaultValue={val} precision={0.1} readOnly />
      </Stack>
    );
  }





 

  return (
    <div>
      <header className='text-2xl font-bold mb-4'>Dashboard Overview</header>
      <div className='flex font-sans mb-4'>
        <div className= ' flex mr-8'>
          <div>
            <Patient/>
          </div>
          <div>
          <div className='font-semibold'>Total Patients</div>
          <div className='font-semibold'>1000</div>
          </div>
        </div>
        <div className='flex'>
          <div className='text-xl'>
            <DoctorIcon/>
          </div>
          <div>
          <div className='font-semibold '>Total Doctors</div>
          <div className='font-semibold'>{doctors.length}</div>
          </div>
        </div>
      </div>

      {/* Editing Form */}
     

      {/* Manage Doctors Section */}
      <div className='space-y-8'>
        <div className='w-full'>
          <div className='mb-4 font-bold text-xl pt-10'>Manage Doctors</div>
          <div className='flex mb-4'>
            <div className='flex w-80 mx-auto '>
              <input
                type='text'
                placeholder='Search Doctor...'
                className=''
                value={doctorSearchTerm}
                onChange={(e) => setDoctorSearchTerm(e.target.value)}
              />
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
                  <th className='border px-4 py-2 w-1/4'>Rating</th>
                 
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.length === 0 ? (
                  <tr>
                    <td colSpan={5} className='border px-4 py-2 text-center text-gray-500'>
                      No doctors found
                    </td>
                  </tr>
                ) : (
                  filteredDoctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td className='border px-4 py-2'>{doctor.id}</td>
                      <td className='border px-4 py-2'>{doctor.name}</td>
                      <td className='border px-4 py-2'>{doctor.specialized}</td>
                      <td className='border px-4 py-2'>{rating(doctor.rating)}</td>
                      
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Manage Hospitals Section */}
        <div className='w-full'>
          <div className='mb-4 font-bold text-xl pt-10'>Manage Hospitals</div>
          <div className='flex mb-4'>
            <div className='flex w-80 mx-auto'>
              <input
                type='text'
                placeholder='Search Hospital...'
                className=''
                value={hospitalSearchTerm}
                onChange={(e) => setHospitalSearchTerm(e.target.value)}
              />
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
                  <th className='border px-4 py-2 w-1/4'>Rating</th>
                </tr>
              </thead>
              <tbody>
                {filteredHospitals.length === 0 ? (
                  <tr>
                    <td colSpan={4} className='border px-4 py-2 text-center text-gray-500'>
                      No hospitals found
                    </td>
                  </tr>
                ) : (
                  filteredHospitals.slice(0, 5).map((hospital) => (
                    <tr key={hospital.id}>
                      <td className='border px-4 py-2'>{hospital.id}</td>
                      <td className='border px-4 py-2'>{hospital.name}</td>
                      <td className='border px-4 py-2'>{hospital.location}</td>
                      <td className='border px-4 py-2'>{rating(hospital.rating)}</td>
                    </tr>
                  ))
                )}
                {filteredHospitals.length > 5 && (
                  <tr>
                    <td colSpan={4} className='border px-4 py-2 text-center text-gray-500'>
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
