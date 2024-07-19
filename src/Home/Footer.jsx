import React from 'react'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div
        class="absolute w-full left-0 lg:-mt-96 lg:w-2/6 px-8 py-12  bg-blue-900 rounded-2xl">
        <div class="flex flex-col text-white">
        <h1 class="font-bold uppercase text-3xl my-4">Rising Super Star Pre-school</h1>
        <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt arcu diam,
            eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
        </p>

        <div class="flex my-4 w-2/3 lg:w-1/2">
          
            <div class="flex flex-col">
            <h2 class="text-2xl">Address</h2>
            <p class="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
            </div>
            </div>

            <div class="flex my-4 w-2/3 lg:w-1/2">
          
            <div class="flex flex-col">
                <h2 class="text-2xl">Contact Us</h2>
                <p class="text-gray-400">Mobile: xxx-xxx-xxx</p>
                <p class="text-gray-400">Email: xxx-xxx-xxx</p>
            </div>
            </div>

            <div class="flex my-4 w-2/3 lg:w-1/2">
                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                    <i class="fab fa-facebook-f text-blue-900" />
                </a>
                <a href="https://www.instagram.com/rising_super_star_preschool/" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                    <FaInstagram color='red' size={23} className='text-center w-full'/>
                </a>
            </div>
        </div>
    </div>  
  )
}

export default Footer