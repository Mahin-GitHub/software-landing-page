import React from 'react';
import Image from 'next/image';
import { MdOutlineSlowMotionVideo } from "react-icons/md";



const Header = () => {
    return (
        <div>
            <section className=' text-white py-[20px] '> 

            <div className='container max-w-[1200px] flex flex-col sm:flex-row gap-8 justify-between items-center mx-auto'>
                <div>
                    <h2 className='font-bold text-2xl sm:text-4xl mt-6 sm:mt-0'>Software Landing Page</h2>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dignissimos!</p>
                    <div className='flex gap-4 mx-auto items-center py-4 mt-8'>
                    <div><button className='bg-blue-500 p-3 rounded-full' >Get Started</button></div>
                    <div className='flex gap-2 items-center cursor-pointer hover:text-blue-500'>
                        <div><MdOutlineSlowMotionVideo className='w-[30px] h-[30px]' /></div>
                        <div>Watch vedio</div>
                    </div>
                    </div>
                </div>
                <div>
                    <Image className='sm:w-full sm:h-auto' src={"/assets/images/hero-img-3.png"} alt="hero-img" width={6000} height={6000} ></Image>
                </div>
            </div>

            </section>
            
            
        </div>
    );
};

export default Header;