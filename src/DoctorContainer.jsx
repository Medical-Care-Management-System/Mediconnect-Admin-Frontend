import React from 'react'

const DoctorContainer = () => {
    const doctor_data=[
        {name:"John smith",doctor_id:12345},
        {name:"Emily Clark",doctor_id:12344},
        {name:"William Johnson",doctor_id:12343},
    ]
    return (
        <div>
          <div className='text-gray-700 p-2 text-2xl'>Doctors</div>
          <div>
            <div className="mt-6">
              {doctor_data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2 cursor-default"
                >
                  <div className={`border border-black flex flex-col items-center justify-center ${index === 0 ? 'bg-blue-400' : ''}`}>
                    <div>DR. {item.name}</div>
                    <div>Doctor ID: {item.doctor_id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
      
}

export default DoctorContainer