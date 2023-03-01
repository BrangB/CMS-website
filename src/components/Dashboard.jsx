import React from 'react'
import Animation from './Animation'

function Dashboard() {
  return (
    <>
        <div className='absolute top-0 right-0 xsm:w-full xsm:h-[55px] bg-white flex xsm:items-center xsm:justify-end md:justify-center lg:justify-end p-3'>
            <input type="text" placeholder='Search...' className='text-black xsm:px-3 xsm:py-2 mr-4 xsm:text-md md:text-md w-[250px] h-[45px] bg-[#e6eef1] rounded-md' />
          </div>
        <Animation>
        <div className='w-full h-auto relative top-[55px] flex-wrap p-6 flex xsm:justify-center lg:justify-start'>
            <div className='bg-white min-w-[230px] min-h-[130px] max-w-[250px] max-h-[150px] m-3 p-2 flex items-center justify-center xsm:text-lg lg:text-xl font-bold rounded-sm shadow-sm hover:shadow-md duration-200'>Content</div>
            <div className='bg-white min-w-[230px] min-h-[130px] max-w-[250px] max-h-[150px] m-3 p-2 flex items-center justify-center xsm:text-lg lg:text-xl font-bold rounded-sm shadow-sm hover:shadow-md duration-200'>Content</div>
        </div>
        </Animation>
    </>
  )
}

export default Dashboard