

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
      <div className='fixed top-0 left-0 right-0 z-50'>
          <nav className="   flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">

            
          
<div class="flex items-center  ">
 <img src="../imges/icon.jpg" alt="Icon" class="w-20 h-30 "/> 
      <Link   className="mr-10 font-serif font-semibold " to="/home">Quran-Hadith</Link>
      </div>

 <div onClick={toggle} className="px-4 cursor-pointer md:hidden">
     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
 </div>
 <div className="pr-8 hidden md:block hidden">
     <Link className="p-4" to="/home">Home</Link>
     <Link className="p-4" to="/menu">Menu</Link>
     <Link className="p-4" to="/about">About</Link>
     <Link className="p-4" to="/contact">Contact</Link>
 </div>
</nav>
      </div>
    );
};

export default Navbar;