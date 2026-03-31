import React from 'react';
import i1 from '../../assets/products/Group 5.png';
import i2 from '../../assets/products/Play.png';
import i3 from '../../assets/products/banner.png';

const Banner = () => {
    return (
        <div className='md:w-[80%] w-[90%] py-20 mx-auto flex justify-between items-center lg:gap-0 gap-10 lg:flex-row flex-col'>
            <div className='space-y-4'>
                <p className='bg-[#E1E7FF] w-[294px] py-[8px] px-[16px] rounded-3xl flex items-center gap-1  text-purple-700 font-medium text-[16px]'><img className='' src={i1} alt="" /> New: AI-Powered Tools Available</p>
            <h1 className='font-extrabold md:text-6xl text-4xl'>Supercharge Your <br/> Digital Workflow</h1>
            <p className=' md:text-[18px] text-[#627382] md:w-2xl'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
</p>
<div className='flex items-center gap-4'>
    <button className='hover:scale-[1.02] transition-transform active:opacity-80 text-white font-bold text-[14px] md:text-[16px] py-2 md:px-4 px-2 rounded-3xl  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
<button className='hover:scale-[1.02] transition-transform active:opacity-80 flex items-center gap-1 border-2 border-purple-600 font-bold md:text-[16px] text-[14px] py-2 md:px-4 px-2 rounded-3xl'><img src={i2} alt="" />Watch Demo</button></div>
            </div>
            

            <div className='shadow-2xl shadow-purple-200'>
                <img src={i3} alt="" />
            </div>
        </div>
    );
};

export default Banner;