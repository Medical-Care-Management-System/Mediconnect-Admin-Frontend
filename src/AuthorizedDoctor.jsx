import React from 'react';

const AuthorizedDoctor = ({ doctorId, onDoctorAction }) => {

  const HandleClick = (value) => {
    if (value === true) {
      console.log('Accepted');
    } else {
      console.log('Rejected');
    }
    onDoctorAction();
  };

  return (
    <div>
      <div className='text-gray-700 px-4 py-2 text-2xl'>
        Authorized Doctor
      </div>
      <div className='flex px-4 py-8'>
        {/* Flex container to make them side by side */}
        <div className='flex w-full justify-between'>
          <div className='w-1/2'>
            <div>
              Doctor ID: {doctorId ? doctorId : ''}
            </div>
            <div className='text-lg font-semibold mt-4'>
              Medical Council Results
            </div>
            <div className='flex flex-col mt-4'>
              <div className='flex py-2'>
                <div>Name</div>
                <div className='px-10'></div>
                <div className='border border-gray-600' style={{ width: '300px', height: '30px' }}></div>
              </div>
              <div className='flex py-2'>
                <div>Registered Date</div>
                <div style={{ width: '10px' }}></div>
                <div className='border border-gray-600' style={{ width: '300px', height: '30px' }}></div>
              </div>
            </div>
          </div>

          {/* Photo section */}
          <div className='w-1/2'>
            <div>Doctor ID Photo</div>
            <div className='pt-8 pb-4'>Front View</div>
            <div className='border border-red-400' style={{ width: '300px', height: '200px' }}></div>
            <div className='pt-4'>Back View</div>
            <div className='border border-red-400' style={{ width: '100px', height: '50px' }}></div>
          </div>
        </div>
      </div>

      <div className='flex pl-14 pt-20'>
        <button className='border bg-red-600 px-32 py-2 text-white' onClick={() => HandleClick(false)}>
          Revoke
        </button>
        <div className='px-36'></div>
        <button className='border bg-green-500 px-24 text-white' onClick={() => HandleClick(true)}>
          Authorize Doctor
        </button>
      </div>
    </div>
  );
};

export default AuthorizedDoctor;
