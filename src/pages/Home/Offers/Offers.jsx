/* eslint-disable no-unused-vars */
import React from 'react';

const Offers = () => {
    return (
        <div className='max-w-screen-2xl mx-auto mt-4 '>
            <h1 className='text-3xl text-center border-y-4 max-w-xs container py-4 my-4 mx-auto'>Travel more, Spend less</h1>
            <p className=' text-center mb-4'>Promotions, deals, and special offers for you</p>
            <div className=' relative grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-4'>
                <div  className='  bg-[#EAFBF7] hover:bg-emerald-100 rounded-xl p-4 transform transition duration-500 hover:scale-105'>
                    <h1 className="text-xl font-bold">Genius</h1>
                    <p>You are at <span className=' font-bold'>Genius Level 1</span> in<br></br> our loyalty program</p>
                </div>
                <div className='  bg-[#EAFBF7] hover:bg-cyan-100 rounded-xl p-4 transform transition duration-500 hover:scale-105'>
                    <h1 className="text-xl font-bold">10% discounts on stays</h1>
                    <p>Enjoy discounts at participating properties worldwide</p>
                </div>
                <div className=' bg-[#EAFBF7] hover:bg-blue-100  rounded-xl p-4 transform transition duration-500 hover:scale-105'>
                    <h1 className="text-xl font-bold">10% off rental Local Vehicle</h1>
                    <p>Save on select rental cars</p>
                </div>
                <div className=' bg-[#EAFBF7] hover:bg-green-100  rounded-xl p-4 transform transition duration-500 hover:scale-105'>
                    <h1 className="text-xl font-bold">15% discounts on stays</h1>
                    <p>Complete 5 bookings to unlock Genius Level 2</p>
                </div>
            </div>
        </div>
    );
};

export default Offers;