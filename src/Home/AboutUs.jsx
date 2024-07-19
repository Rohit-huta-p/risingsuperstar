import React from 'react'
import arrow_left from '../assets/background-images/arrow_left.png'
import arrow_right from '../assets/background-images/arrow_right.png'
const AboutUs = () => {
  return (
    <>

        <div className='flex flex-col justify-evenly relative bg-slate-100 h-[100vh]'>
          <div className=' flex justify-center items-center'>
              <img src={arrow_right} alt="" className='h-20 mr-4 translate-y-3'/>
              <h2 className='text-3xl'>About Us</h2>
              <img src={arrow_left} alt="" className='h-20 ml-4 translate-y-3'/>
          </div>
          <div className='p-3'>
            <h3 className='text-3xl text-rose-600 font-medium mt-5'>Looking for a place where your child can shine academically, socially, and personally?</h3>
            <ul className='list-inside list-disc font-thin mt-5'>
              <li className='ml-6'>Welcome to Rising Superstar Preschool in <strong>Bhugaon!</strong></li>
              <li className='ml-6'>Our admissions are now open, and we can't wait to help your little one thrive.</li>
              <li className='ml-6'>With a caring environment and convenient transport facilities, we make it easy for your child to succeed.</li>
              <li className='ml-6'>Hurry and contact us at 7020054270 to reserve your spot today!</li>
            </ul>
          </div>
            <a href=""><p className='w-fit text-lg bg-cyan-500 active:bg-cyan-600 text-white rounded-lg px-3 py-2 font-bold mt-4'>Activities</p></a>
          </div>
 
    </>
  )
}

export default AboutUs