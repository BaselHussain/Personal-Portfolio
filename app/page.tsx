"use client"
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri"
import { RiNextjsFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>   
<div className="relative w-full h-full md:h-[80vh]">
           
            <div className="absolute inset-0">
                <Image
                    src="/images/hero image.jpg" 
                    alt="Hero Image"
                    layout="fill" 
                    objectFit="cover" 
                    className="opacity-90" 
                />
            </div>
            {/* Overlay Content */}
            <div className="flex justify-center items-center md:items-start md:justify-start  relative  text-white text-center">
                <div className='md:w-[28rem]  md:mx-8 mt-16 '>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Hi👋,I'm Basel hussain</h1>
                    <p className="text-2xl font-bold mx-4">I'm a</p>
                    <span className='font-bold text-2xl inline'><Typewriter
  options={{
    strings: [
      "Front-End Developer",
      "Agentic AI Student"
    ],
    autoStart: true,
    loop: true,
  }}
/></span>
<p className='my-4 md:font-semibold mx-4'>I’m a passionate web developer and a student of Cloud Applied Generative AI. With a strong foundation in front-end technologies like HTML, CSS, JavaScript, TypeScript, Tailwind CSS, React, and Next.js, I create dynamic, responsive web applications. Currently, I’m expanding my expertise in AI-powered cloud solutions, eager to blend web development with cutting-edge generative AI tools. Explore my projects and see how I bring innovative ideas to life!</p>
                    
                </div>
            </div>
        </div>

        <div className='w-full my-16 space-y-3'>
          <h1  className='font-bold text-center text-3xl'>My Tech Stack</h1>
          <p className='text-center font-semibold'>Technologies I have been working with recently</p>
          <div className='w-full flex justify-center '>
          <div >
            <ul className='grid grid-cols-4 gap-8 md:gap-12 list-none mt-10'>
              <li><FaHtml5 className='text-4xl md:text-6xl text-orange-600 animate-bounce'/></li>
              <li><IoLogoCss3 className='text-4xl md:text-6xl text-blue-500 animate-bounce'/></li>
              <li><FaJs className='text-4xl md:text-6xl text-yellow-500 animate-bounce'/></li>
              <li><SiTypescript className='text-4xl md:text-6xl text-blue-600 animate-bounce'/></li>
              <li><FaReact className='text-4xl md:text-6xl text-blue-300 animate-bounce'/></li>
              <li><RiNextjsFill className='text-4xl md:text-6xl  animate-bounce'/></li>
              <li><RiTailwindCssFill className='text-4xl md:text-6xl text-blue-300 animate-bounce'/></li>
              <li><BsFillBootstrapFill className='text-4xl md:text-6xl text-purple-400 animate-bounce'/></li>
            </ul>
          </div>
          </div>
        </div>
        <div className='py-16 md:py-28'></div> 
    </div>
  );
}
