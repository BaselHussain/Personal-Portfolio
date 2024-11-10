"use client";
import React from 'react';
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Link from 'next/link';
import { Button } from './ui/button';
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

   
    const handleMenu = () => {
        setIsMenuOpen(prev => !prev); // Toggle the menu visibility
    };

    const handleNewPage=()=>{
        setIsMenuOpen(false)
    }
    
    return(
        <>
       <nav className="flex justify-between items-center p-3 bg-gray-900 md:sticky md:top-0 md:z-30">
        <div  className='flex item-center  space-x-3'>
        <Image
        src="/images/me8.jpeg"
        alt='my self'
        width={40}
        height={40}
        className='object-cover max-w-12 max-h-12 rounded-full'/>
        <p className='mt-3 font-semibold'>Basel Hussain</p>
        </div>
        <div>
            <ul className='hidden md:flex space-x-7 font-bold '>
             <Link href={"/"}>  <li className='cursor-pointer hover:-translate-y-0.5 '>Home</li></Link> 
             <Link href={"/about"}> <li className='cursor-pointer hover:-translate-y-0.5 '>About</li></Link> 
             <Link href={"/projects"}><li className='cursor-pointer hover:-translate-y-0.5 '>Projects</li></Link> 
             <Link href={"/contact"}><li className='cursor-pointer hover:-translate-y-0.5 '>Contact Me</li></Link> 
            </ul>
        </div>
        <div className='hidden md:block mb-2'>
        <a href="/cv.pdf" download>
  <Button className="bg-red-500 hover:bg-red-400 font-bold mt-4 gap-2">Download My CV<FaCloudDownloadAlt/></Button>
  </a>
        </div>
        
        <div className='p-5 md:hidden'>
            <GiHamburgerMenu  onClick={handleMenu} className='text-2xl '/> 
        </div>
        
{isMenuOpen  && (
        <div id='navbar' className=' fixed z-10 inset-0 bg-black text-white   p-3 md:hidden opacity-100 '>
            <div className='navbar flex justify-between items-center p-2'>
                <div className='flex items-center space-x-2'>
            <Image
        src="/images/me8.jpeg"
        alt='my self'
        width={40}
        height={40}
        className='object-cover max-w-12 max-h-12 rounded-full '/>
        <p className=' font-semibold'>Basel Hussain</p>
        </div>
        <div className='p-2 md:hidden'>
            <ImCross  onClick={handleMenu} className='text-2xl cursor-pointer '/> 
        </div>
            </div>


            <div className='flex flex-col mt-8 ml-5'>
            <ul className='flex flex-col  font-bold space-y-4'>
            <Link href={"/"} onClick={handleNewPage}>  <li className='cursor-pointer focus:underline'>Home</li></Link> 
             <Link href={"/about"} onClick={handleNewPage}> <li className='cursor-pointer focus:underline'>About</li></Link> 
             <Link href={"/projects"} onClick={handleNewPage}><li className='cursor-pointer focus:underline'>Projects</li></Link> 
             <Link href={"/contact"} onClick={handleNewPage}><li className='cursor-pointer focus:underline'>Contact Me</li></Link> 
            </ul>
        </div>
        <div className='md:hidden  '>
        <a href="/cv.pdf" download>
  <Button className="bg-red-500 hover:bg-red-400 font-bold mt-4 gap-2">Download My CV<FaCloudDownloadAlt/></Button>
  </a>
        </div>
        </div>
    )}
       </nav>
        </>
    )
}