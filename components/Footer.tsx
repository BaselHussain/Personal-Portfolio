"use client";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import React from "react";
import { Button } from "./ui/button";
export default function Footer(){


    return(
        <>
        <div className="bg-gray-900 w-full max-w-[4000px]">
         <div className="flex flex-col md:flex-row  md:justify-between px-10 py-7 space-y-6 md:space-y-0">
            <div className=" space-y-2">
                <h1 className="md:text-2xl font-bold">Feel free to reach me at: </h1>
           <Link href={"mailto:baselhussain4@gmail.com"}>  <div className="flex items-center space-x-1"><HiOutlineMail />  <p className="text-sm ">baselhussain4@gmail.com</p></div> </Link>
                <div className="flex flex-col ">
                <h1 className="md:text-[1.25rem] font-semibold">Or Send me a Message on Whatsapp</h1>
               <a href="https://wa.me/923313088625?text= " target="_blank"> <Button className="bg-red-500 md:font-semibold  hover:bg-red-400 mt-2 gap-1">Send Message<FaWhatsapp className="text-md"/></Button></a>
                </div>
            </div>
            <hr />
            <div>
                <div className="space-y-4">
                <h1 className="md:text-2xl font-bold">Social Links</h1>
                <h1 className="text-xl">Let's connect and explore the tech world Together!</h1>
                <ul className="flex space-x-5 ">
                   <Link href={"https://www.facebook.com/basel.hussain.562"} target="_blank"> <li ><FaFacebook className="hover:-translate-y-0.5 "/></li></Link>
                  <Link href={"https://www.linkedin.com/in/basel-hussain-674ab02b5/"} target="_blank">  <li ><FaLinkedin className="hover:-translate-y-0.5"/></li></Link>
                  <Link href={"https://www.instagram.com/basel._.hussain/?hl=en"} target="_blank">  <li ><GrInstagram className="hover:-translate-y-0.5"/></li></Link>
                   <Link href={"https://github.com/BaselHussain"} target="_blank"> <li ><IoLogoGithub className="hover:-translate-y-0.5"/></li></Link>

                </ul>
            </div>
            </div><hr />
            <div>
          <p className="font-semibold md:mt-24 text-sm"> All right reserved | @Basel Hussain</p> 
            </div><hr />
         </div>
        </div>
        </>
    )
}