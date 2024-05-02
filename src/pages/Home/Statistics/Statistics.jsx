/* eslint-disable no-unused-vars */
import React from 'react';
import { MdOutlineFreeCancellation } from "react-icons/md";
import { FaPushed } from "react-icons/fa";
import { TbReservedLine } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
const Statistics = () => {
    return (
        <div className='mt-6  p-6'>
            <h2 className=' text-4xl text-center'>Why book with Book-Swiftly?</h2>
            <div className=' mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative'>
                <div className=' flex flex-col items-center gap-2 p-4 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 '>
                    <p className=' text-4xl text-red-500'><MdOutlineFreeCancellation /></p>
                    <h2 className='text-3xl'>Free Cancellation</h2>
                    <p>Stay flexible on your trip.</p>
                </div>
                <div className=' flex flex-col items-center gap-2 p-4 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 '>
                    <p className=' text-4xl text-green-400'><FaPushed /></p>
                    <h2 className='text-3xl'>100,000+ experiences</h2>
                    <p>Make memories around the world.</p>
                </div>  
                <div className=' flex flex-col items-center gap-2 p-4 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 '>
                    <p className=' text-4xl text-cyan-400'><TbReservedLine /></p>
                    <h2 className='text-3xl'>Reserve now, pay later</h2>
                    <p>Book your spot.</p>
                </div>
                <div className=' flex flex-col items-center gap-2 p-4 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 '>
                    <p className=' text-4xl text-yellow-400'><MdOutlineReviews /></p>
                    <h2 className='text-3xl'>Trusted reviews</h2>
                    <p>4.3 stars from 140,000+ reviews.</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;