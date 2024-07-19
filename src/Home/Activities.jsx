import React from 'react';
import './activities.css';
import activities_bg from '../assets/background-images/activities_bg.jpg';


const Activities = () => {
  return (
    <div className=''>
      <img src={activities_bg} alt="" className='absolute left-0 h-[930px] rotate-180 w-full opacity-[0.8]' style={{zIndex: "0"}} loading="lazy"/>
      <div className='relative'>
        <div className='flex justify-center items-center '>
          <h2 className='text-4xl mt-[3rem] bg-orange-500 text-white px-4 py-1 rounded'>Activities</h2>
        </div>

        {/* ACTVITIES */}
        <div className='p-12'>
          <div className='flex items-center ' >
            <div className='circle-se relative'></div>
            <p className='font-normal bg-stone-500 rounded-full w-fit h-fit px-3 py-1 text-white text-[22px] mt-3 ml-5'>
              Spoken English
            </p>
          </div>

          <div className='flex justify-end'>
            <div className='flex items-center'>
              <p className='text-center text-white text-[22px] mt-3 font-normal bg-stone-500 w-fit rounded-full px-3 py-1 mr-5'>
                Abacus
              </p>
              <div className='circle-a relative'></div>
            </div>
          </div>

          <div className='flex items-center ' >
            <div className='circle-d relative'></div>
            <p className='font-normal bg-stone-500 rounded-full w-fit h-fit text-white text-[22px] mt-3 px-6 py-1  ml-5'>
              Dance
            </p>
          </div>
          
         
          <div className='flex justify-end'>
            <div className='flex items-center'>
              <p className='text-center text-white text-[22px] mt-3 font-normal bg-stone-500 w-fit rounded-full px-3 py-1 mr-5'>
                Drawing
              </p>
              <div className='circle-drawing relative'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities;
