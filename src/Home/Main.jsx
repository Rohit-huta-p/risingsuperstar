import React from 'react'
import mainrec from '../assets/main-rec.png'
import arrow_down from '../assets/background-images/arrow-down.png'
import { TiTick } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Main = () => {
    
  return (
    <>   
        <div className='flex flex-col items-start justify-evenly h-[110vh]'>
            <h1 className='text-5xl text-start'>
                <span className='font-thin'>We Care Child Study</span>
                <br />
                Start Learning With

            </h1>
            <div className='flex relative'>
                <h2 className="main-rec py-5 px-2 text-2xl text-white"  style={{ backgroundImage: `url(${mainrec})`, backgroundRepeat: "no-repeat" }}>Rising Super Star Pre-school</h2>
                <img src={arrow_down} alt="arrow-down" className='h-[4rem] absolute right-[-15px] bottom-[-48px]'/>
            </div>

            {/* Activites done */}
            <div>
                <div className='flex'>
                    <div className='flex mr-5'>
                        <TiTick size={25} color='white' className='bg-rose-400 rounded-full mr-2'/>
                        <p className='text-lg'>Outdoor Games</p>
                    </div>
                    <div className='flex'>
                        <TiTick size={25} color='white' className='bg-orange-600 rounded-full mr-2'/>
                        <p className='text-lg'>Sports Activities</p>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <TiTick size={25} color='white' className='bg-purple-600 rounded-full mr-2'/>
                    <p className='text-lg'>Nutritious Foods</p>
                </div>
            </div>

            <div>
                <a href='+91' className='flex items-center text-2xl bg-lime-700 text-white px-4 py-2 rounded-lg'>
                <FaWhatsapp size={40} className='mr-3' /> Enquire &<br />  get offer now 
                </a>
            </div>
        </div>
    </>
  )
}

export default Main