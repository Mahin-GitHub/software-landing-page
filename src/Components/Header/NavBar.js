"use client";
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const toggleBtn = () => {
    //     setIsOpen(!isOpen)
    // }

    const [header, setHeader] = useState(false);
    const scrollHeader=()=>{
        if(window.scrollY >= 20){
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',scrollHeader)
        return ()=>{
            window.addEventListener('scroll',scrollHeader)

        }

    },[])
    
    return (
        <div className={header?"fixed w-full h-fit bg-[#4e85ecd7]":"bg-transparent"}>
            <section >
                <div >
                    <div >
                        <nav className='text-white py-4'>
                            <div className='container flex justify-between mx-auto gap-4 items-center '>
                                <div>
                                    <Image className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' src={"/assets/images/logo.png"} alt="logo" width={6000} height={6000} />
                                </div>
                                <div>
                                    <ul className='hidden md:flex justify-between  items-center font-bold '>
                                        <li className='hover:text-blue-600 cursor-pointer p-4  rounded-lg'>Home</li>
                                        <li className='hover:text-blue-600 cursor-pointer p-4  rounded-lg'>About</li>
                                        <li className='hover:text-blue-600 cursor-pointer p-4  rounded-lg'>Services</li>
                                        <li className='hover:text-blue-600 cursor-pointer p-4  rounded-lg'>Portfolio</li>
                                        <li className='hover:text-blue-600 cursor-pointer p-4  rounded-lg'>Products</li>
                                        <li className='hover:text-blue-600 cursor-pointer p-4  rounded-lg'>Pricing</li>
                                        <li className='hover:text-blue-600 cursor-pointer p-4  rounded-lg'>Contact</li>
                                    </ul>
                                </div>
                                <div className='md:hidden'>

                                    {/* <button onClick={toggleBtn} className='p-2 rounded-md '><FiAlignJustify/></button> */}
                                    <FiAlignJustify onClick={()=>setIsOpen(true)} className="w-6 h-6 "/>


                                </div>

                            </div>
                            {
                                
                                    <div className={clsx("fixed h-full w-screen xl:hidden backdrop-blur-sm bg-blue-400 top-0 right-0 -translate-y-full", isOpen && "translate-y-0 transition-all duration-500")}>
                                        
                                        <section className=' h-full grid justify-center items-center'>
                                        <div className='m-1 absolute right-6 top-6'>
                                            <RxCross2 onClick={() => setIsOpen(false)} className="w-6 h-6"/>
                                            </div>
                                            
                                            <div>
                                                <ul >
                                                    <li className='hover:text-[#4f89ee] cursor-pointer font-bold p-2 '>Home</li>
                                                    <li className='hover:text-[#4f89ee] cursor-pointer font-bold p-2 '>About</li>
                                                    <li className='hover:text-[#4f89ee] cursor-pointer font-bold p-2 '>Services</li>
                                                    <li className='hover:text-[#4f89ee] cursor-pointer font-bold p-2 '>Portfolio</li>
                                                    
                                                    <li className='hover:text-[#4f89ee] cursor-pointer font-bold p-2 '>Products</li>
                                                    <li className='hover:text-[#4f89ee] cursor-pointer font-bold p-2 '>Pricing</li>
                                                    <li className='hover:text-[#4f89ee] cursor-pointer font-bold p-2 '>Contact</li>
                                                </ul>

                                            </div>
                                        </section>
                                    </div>


                            }
                        </nav>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default NavBar;