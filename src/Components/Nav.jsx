import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Nav = () => {
    return (
       <nav className='py-4 lg:w-[90%] w-[95%] mx-auto flex justify-between items-center'>
        <div className='text-3xl font-bold'><h1 className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1></div>
       
       <ul className='flex items-center gap-5'>
        <li><a className='font-semibold text-[16px]' href="">Products</a></li>
        <li><a className='font-semibold text-[16px]' href="">Features</a></li>
        <li><a className='font-semibold text-[16px]' href="">Pricing</a></li>
        <li><a className='font-semibold text-[16px]' href="">Testimonials</a></li>
        <li><a className='font-semibold text-[16px]' href="">FAQ</a></li>
       </ul>

       <div className='flex items-center gap-3'>
        <span><FiShoppingCart></FiShoppingCart></span>
        <button>Login</button>
        <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[16px] font-semibold px-[16px] py-[12px] rounded-3xl'>Get Started</button>
       </div>
       </nav>
    );
};

export default Nav;