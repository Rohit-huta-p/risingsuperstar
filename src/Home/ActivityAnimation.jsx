
import React from 'react';
import { motion } from 'framer-motion';

const Activity = ({ name, circleClass }) => {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0.8 }}
      whileInView={{ scale: 1.2, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.4 }}
      className='flex items-center my-6'
    >
      <div className={`${circleClass} relative mt-5`}></div>
      <p className='font-normal bg-stone-500 rounded-full w-fit h-fit px-3 py-1 text-white text-[19px] mt-3 ml-5'>
        {name}
      </p>
    </motion.div>
  );
};

export default Activity;