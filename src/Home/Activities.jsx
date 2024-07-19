import React from 'react';
import './activities.css';
import activities_bg from '../assets/background-images/activities_bg.jpg';
import Activity from './ActivityAnimation'

const Activities = () => {
  return (
    <div className=''>
      <img src={activities_bg} alt="" className='absolute left-0 h-[930px] rotate-180 w-full opacity-[0.8]' style={{zIndex: "0"}} loading="lazy"/>
      <div className='relative'>
        <div className='flex justify-center items-center '>
          <h2 className='text-4xl mt-[3rem] bg-orange-500 text-white px-4 py-1 rounded'>Activities</h2>
        </div>

        {/* ACTVITIES */}
        <div className='p-[4rem]'>
        <Activity name="Spoken English" circleClass="circle-se" />

          <div className='flex justify-end'>
            <Activity name="Abacus" circleClass="circle-a" />
          </div>

          <Activity name="Dance" circleClass="circle-d" />

            <div className='flex justify-end'>
              <Activity name="Drawing" circleClass="circle-drawing" />
            </div>
        </div>
   

      </div>
    </div>
  )
}

export default Activities;
