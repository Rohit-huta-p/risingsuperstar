import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ContactForm = () => {
    const openWhatsApp = (phoneNumber, message) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
  return (
    <div className='bg-white mt-10'>

        <div className='flex justify-center items-center'>
            <h2 className='text-4xl mt-5'>Contact Form</h2>
        </div>
        <div class="flex justify-center items-center">
            <div class="container  my-4 px-4 lg:px-20">

                <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div class="flex">
                        <h1 class="font-bold uppercase text-1xl">Send us a message</h1>
                    </div>
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="First Name*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Last Name*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" placeholder="Phone*" />
                </div>
                        <div class="my-4">
                            <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="my-2 w-1/2 lg:w-1/4">
                            <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                            focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>

            </div>

        </div>

<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <div>
    <a onClick={() => openWhatsApp("+917020054270", "Hello, Can I get more details? ")}  className="flex justify-center block w-[55px] h-[55px] bg-lime-700 rounded-full transition-all hover:shadow-lg transform hover:scale-110 hover:rotate-12">
        <button ><FaWhatsapp size={40} color='white' className=''/> </button>
    </a>
  </div>
</div>
    </div>
  )
}

export default ContactForm