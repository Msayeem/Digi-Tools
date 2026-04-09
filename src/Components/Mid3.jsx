import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { FcCheckmark } from 'react-icons/fc';

const Mid3 = () => {
    return (
        <div>

<div className='space-y-4'>
    <h1 className='md:text-5xl text-3xl font-extrabold text-center'>Simple, Transparent Pricing</h1>
<p className='text-[18px] text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
</div>

            <div className='py-15 lg:w-[70%] w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

            <div className='p-5 space-y-5 border-2 border-purple-600 rounded-3xl'>

                <div className=''>
                    <h1 className='font-bold text-2xl'>Starter</h1>
                <p className='text-[18px] text-[#627382]'>Perfect for getting started</p>
                </div>
                <h1 className='text-[#627382] font-semibold'><span className='text-black text-2xl font-bold'>$0</span>/Month</h1>
                <div>
                    <p className='flex items-center gap-2 text-[#627382] font-medium '><FcCheckmark></FcCheckmark>  Access to 10 free tools</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  Basic templates</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  Community support</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  1 project per month</p>
                </div>
            <button className='mt-11 hover:scale-[1.02] transition-transform active:opacity-80 w-full font-bold text-[20px] py-2 rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started Free</button>
            </div>

            <div className='relative rounded-3xl p-5 space-y-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] '>
            <span className='px-3 py-1 rounded-full -top-4 left-1/2 -translate-x-1/2  text-[#BB4D00] bg-[#FEF3C6] text-[16px] font-medium absolute'>Most Popular</span>
                <div className=''>
                    <h1 className='font-bold text-2xl text-white'>Pro</h1>
                <p className='text-[18px] text-white'>Best for professionals</p>
                </div>
                <h1 className='text-white font-semibold'><span className='text-white text-2xl font-semibold'>$29</span>/Month</h1>
                <div>
                    <p className='flex items-center gap-2 text-white font-medium '><FaCheck></FaCheck>  Access to all premium tools</p>
                <p className='flex items-center gap-2 text-white font-medium'><FaCheck></FaCheck>  Unlimited templates</p>
                <p className='flex items-center gap-2 text-white font-medium'><FaCheck></FaCheck>  Priority support</p>
                <p className='flex items-center gap-2 text-white font-medium'><FaCheck></FaCheck>  Unlimited projects</p>
                <p className='flex items-center gap-2 text-white font-medium'><FaCheck></FaCheck>  Cloud sync</p>
                <p className='flex items-center gap-2 text-white font-medium'><FaCheck></FaCheck>  Advanced analytics</p>
                </div>
            <button className="w-full py-2 bg-white rounded-3xl font-bold text-[20px] 
                   hover:scale-[1.02] transition-transform active:opacity-80 
                   shadow-md group">
  <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
    Start Pro Trial
  </span>
</button>
            </div>

            <div className='p-5 space-y-5 border-2 border-purple-600 rounded-3xl'>

                <div className=''>
                    <h1 className='font-bold text-2xl'>Enterprise</h1>
                <p className='text-[18px] text-[#627382]'>For teams and businesses</p>
                </div>
                <h1 className='text-[#627382] font-semibold'><span className='text-black text-2xl font-bold'>$99</span>/Month</h1>
                <div>
                    <p className='flex items-center gap-2 text-[#627382] font-medium '><FcCheckmark></FcCheckmark>  Everything in Pro</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  Team collaboration</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  Custom integrations</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  Dedicated support</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  SLA guarantee</p>
                <p className='flex items-center gap-2 text-[#627382] font-medium'><FcCheckmark></FcCheckmark>  Custom branding</p>
                </div>
            <button className='hover:scale-[1.02] transition-transform active:opacity-80 w-full font-bold text-[20px] py-2 rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>Contact Sales</button>
            </div>
            
        </div>
        </div>
    );
};

export default Mid3;