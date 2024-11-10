"use client";
import {motion} from 'framer-motion';
import Image from "next/image"


export default function About(){
    return(
        <div>
            <div className='flex  flex-col  items-center    w-full text-center my-20'>
                
  <div>
    <Image
    src={"/images/me8.jpeg"}
    width={300}
    height={300}
    alt="me"
    className="rounded-full order-1 "/>
  </div>
  </div>  

  <div className=' md:max-w-full  flex flex-col  my-5 space-y-1 mb-8 mx-6 md:mx-32'>
    <motion.h1
    initial={{x:100,
      opacity:0
    }}
    animate={{x:[100,0],
      opacity:1
    }}
    transition={{duration:"1"
      
    }}
    className=' md:text-start font-bold text-3xl'>Summary</motion.h1>
    <motion.div
    initial={{y:30,
      opacity:0
  }}
  animate={{y:[30,0],
      opacity:1
  }}
  transition={{duration:"1.5"}}
    className='text-start font-semibold '>I’m a web developer with a passion for building responsive, dynamic web applications using technologies like HTML, CSS, JavaScript, TypeScript, Tailwind CSS, React, and Next.js. While pursuing my Bachelor’s degree in Civil Engineering from NED University (7th semester), I’m also exploring the intersection of AI and web development. I’m currently participating in a "30 days, 30 projects" challenge to sharpen my skills with Next.js. You can explore my diverse projects, ranging from simple to complex, in the Projects section of my portfolio.I'm eager to embrace new challenges that push the limits of my creativity and technical expertise. Let's make something extraordinary together!</motion.div>
  </div>   

  <div className=' md:max-w-full mx-6  flex flex-col md:mx-32  space-y-1 mb-20'>
    <motion.h1
    initial={{x:100,
      opacity:0
    }}
    whileInView={{x:[100,0],
      opacity:1
    }}
    transition={{duration:1
      
    }}
     className=' md:text-start font-bold text-3xl'>Education</motion.h1>
    <ul className="list-disc mx-5">
      <motion.div
      initial={{y:30,
        opacity:0
    }}
    whileInView={{y:[30,0],
        opacity:1
    }}
    transition={{duration:"1.5"}}
      className="space-y-3">
      <li>
        <div>
        <div>
          <h1 className="md:text-lg font-semibold">Diploma Certificate: Cloud Applied Generative AI Engineer</h1>
          <span >Feb. 2024 – Present | </span>
          <span>Governor House - Karachi, Sindh</span>
          </div>
          
       
        </div>
      </li>
      <li>
        <div>
        <div>
          <h1 className="md:text-lg font-semibold">Bachelor of Engineering in Civil Engineering</h1>
          <span >Nov 2021 – Present | </span>
          
          <span>NED University Of Engineering & Technology - Karachi, Sindh</span>
          </div>
          
        </div>
      </li>
      <li>
        <div className='pb-20'>
        <div>
          <h1 className="md:text-lg font-semibold">Intermediate in Pre-Engineering</h1>
          <span >2021 | </span>
          <span>Adamjee Govt Science College - Karachi, Sindh</span>
          </div>
          
        </div>
      </li>
      </motion.div>
    </ul>
  </div> 
        </div> 
    )
}

