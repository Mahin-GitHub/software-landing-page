import About from '@/Components/About/About';
import Header from '@/Components/Header/Header';
import NavBar from '@/Components/Header/NavBar';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className='bg-[#37517E] '>
      <NavBar/>
      <Header></Header>

      </div>
      
      <About></About>
    </div>
  );
};

export default page;