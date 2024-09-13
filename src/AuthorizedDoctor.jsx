import React from 'react'

const AuthorizedDoctor = () => {
  return (
    <div className=''>
        <div className='text-gray-700 px-4 py-2 text-2xl'>
            Authorized Doctor
        </div>
        <div className='px-4 py-8'>
            Doctor ID:
        </div>
        <div className=' flex '>
            <div className='px-4'>
                <div className='text-lg font-semibold'>
                    Medical Council Results
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='flex py-10 '>
                            <div className=''>
                                Name
                            </div>
                            <div className='px-10'>
                            </div>
                            <div className='border border-gray-600' style={{ width: '300px', height: '30px' }}>

                            </div>
                        </div>
                        <div className='flex '>
                            <div>
                                Registerd Date
                            </div>
                            <div style={{width:'20px'}}></div>
                            <div className='border border-gray-600' style={{ width: '300px', height: '30px' }}>

                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className='p-10'>

            </div>
            <div id='Photo' >
                <div>
                    Doctor ID Photo
                </div>
                <div className='pt-8 pb-4'>
                    Front View
                </div>
                <div className='border border-red-400' style={{ width: '300px', height: '200px' }}>

                </div>
                <div>
                    Back View
                </div>
                <div className='border border-red-400' style={{ width: '100px', height: '50px' }}>

                </div>
            </div>

        </div>
        <div className='flex pl-14 pt-20'>
            <button className='border bg-red-600 px-32 py-2 text-white' onClick={()=>{}}>
                Revoke
            </button>
            <div className='px-36'></div>
            <button className='border bg-green-500 px-24 text-white' onClick={()=>{}}>
                Authorize Doctor
            </button>

        </div>
    </div>
  )
}

export default AuthorizedDoctor;