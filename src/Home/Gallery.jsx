import React, { useEffect } from 'react'
import _1 from '../assets/gallery/1.jpeg'
import _2 from '../assets/gallery/2.jpeg'
import _3 from '../assets/gallery/3.jpeg'
import _4 from '../assets/gallery/4.jpeg'
import _5 from '../assets/gallery/5.jpeg'
import _6 from '../assets/gallery/6.jpeg'
import _7 from '../assets/gallery/7.jpeg'
import _8 from '../assets/gallery/8.jpeg'
import _9 from '../assets/gallery/9.jpeg'
import _10 from '../assets/gallery/10.jpeg'
import _11 from '../assets/gallery/11.jpeg'
import _12 from '../assets/gallery/12.jpeg'
import _13 from '../assets/gallery/13.jpeg'
import _14 from '../assets/gallery/14.jpeg'

// Videos
import _1v from '../assets/gallery/videos/15.mp4'
import _2v from '../assets/gallery/videos/16.mp4'
import _3v from '../assets/gallery/videos/17.mp4'

const Gallery = () => {
  useEffect(() => {
    console.log('Video source:', _1v);
  }, []);
  return (
    <div className='relative mt-[150px]'>
      <div className=' flex justify-center items-center '>
        {/* <img src={arrow_right} alt="" className='h-20 mr-4 translate-y-3'/> */}
        <h2 className='text-3xl'>Gallery</h2>
        {/* <img src={arrow_left} alt="" className='h-20 ml-4 translate-y-3'/> */}
      </div>  
      <div className="grid grid-cols-4 grid-rows-7 gap-4 mt-5">
          <img src={_1} alt="" className='h-full col-span-2 row-span-2'/>
          <img src={_2} alt="" className='h-full col-span-2 row-span-2 col-start-3'/>
          <img src={_3} alt="" className='h-full col-span-2 row-span-1'/>
          <img src={_4} alt="" className='h-full col-span-2 row-span-2 col-start-3'/>
          <img src={_5} alt="" className='h-full col-span-2'/>
          <img src={_7} alt="" className='h-full col-span-2 '/>
          <img src={_6} alt="" className='h-full col-span-2 row-span-4 col-start-3'/>
          <img src={_8} alt="" className='h-full col-span-2 '/>
          <img src={_10} alt="" className='h-full col-span-2 row-span-4'/>
          <img src={_9} alt="" className='h-full col-span-2 row-span-2 col-start-3'/>
          <img src={_11} alt="" className='h-full col-span-2 row-span-4'/>
          <img src={_12} alt="" className='h-full col-span-2 row-span-4'/>
          <img src={_13} alt="" className='h-full col-span-2 row-span-4'/>
          <img src={_14} alt="" className='h-full col-span-2 row-span-4'/>
          <img src={_13} alt="" className='h-full col-span-2 row-span-4'/>
        </div>
    </div>
  )
}

export default Gallery