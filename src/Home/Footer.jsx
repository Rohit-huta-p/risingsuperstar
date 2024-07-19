import React from 'react'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div
        className="absolute w-full left-0 lg:-mt-96 lg:w-2/6 px-8 py-12  bg-blue-900 rounded-2xl">
        <div className="flex flex-col text-white">
        <h1 className="font-bold uppercase text-3xl my-4">Rising Super Star Pre-school</h1>
      

        <div className="flex my-4 w-2/3 lg:w-1/2">
          
            <div className="flex flex-col">
            <h2 className="text-2xl">Address</h2>
            <p className="text-gray-400">
                Sr. No 531/12, Sadguru Nagar, Bheind Hira Garden, Near Pradnya Apartment, Bhugaon, Tal. Mulshi, Dist. Pune
            </p>
            </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
          
            <div className="flex flex-col">
                <h2 className="text-2xl">Contact Us</h2>
                <p className="text-gray-400">Mobile: 7020054270</p>

            </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                    <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a href="https://www.instagram.com/rising_super_star_preschool/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                    <FaInstagram color='red' size={23} className='text-center w-full'/>
                </a>
            </div>
        </div>
    </div>  
  )
}

export default Footer