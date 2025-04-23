"use client";
import Image from "next/image"
import {motion} from 'framer-motion';
interface Projects{
    id:number;
    image:string;
    title:string;
    link:string
}
const projects:Projects[]=[{
    id:1,
    image:"/images/marketplace.jpg",
    title:"E-commerce Marketplace",
    link:"https://hackathon-figma-design.vercel.app/"
},{
    id:2,
    image:"/images/blog.jpg",
    title:"Blogs Website",
    link:"https://blog-website-two-lilac.vercel.app/"
},{
    id:3,
    image:"/images/digital clock.jpg",
    title:"Digital Clock",
    link:"https://digital-clock-flax-three.vercel.app/"
},{
    id:4,
    image:"/images/expense tracker.jpg",
    title:"Expense Tracker App",
    link:"https://expense-tracker-app-crne.vercel.app/"
},{
    id:5,
    image:"/images/password.jpg",
    title:"Password Generator ",
    link:"https://password-generator-one-blond.vercel.app/"
},{
    id:6,
    image:"/images/bmi.jpg",
    title:"B.M.I Calculator",
    link:"https://bmi-calculator-two-amber-61.vercel.app/"
},{
    id:7,
    image:"/images/color picker.jpg",
    title:"Color Picker App",
    link:"https://color-picker-app-theta.vercel.app/"
},{
    id:8,
    image:"/images/html.jpg",
    title:"HTML Previewer",
    link:"https://html-previewer-app-seven.vercel.app/"
}]

export default function Projects(){
    return(
        <div>
            <div className="container my-10 max-w-[4000px]">
                <div className="space-y-8">
                    <motion.h1
                    initial={{y:30,
                        opacity:0
                    }}
                    animate={{y:[30,0],
                        opacity:1
                    }}
                    transition={{duration:"1.5"}}
                    className="text-5xl font-bold text-center mb-28 animate-out">My Projects</motion.h1>
                    <motion.h1
                    initial={{y:30,
                        opacity:0
                    }}
                    animate={{y:[30,0],
                        opacity:1
                    }}
                    transition={{duration:"2.70"}}
                    className="text-3xl font-bold text-center">Build With Next.Js</motion.h1>
                    <div className="">
                    <div className="grid grid-cols-2 mx-3 md:mx-6 lg:grid-cols-4 gap-3   mt-10">
                        {projects.map((project)=>(
                            <div key={project.id} className="flex flex-col  bg-gray-900 border border-white rounded-xl m-2 w-full max-w-[200px] md:max-w-[300px] h-[250px] md:h-[300px] mb-24 hover:-translate-y-4">
                                <a href={project.link} target="_blank">
                                <Image src={project.image} width={250} height={450} alt="as" className="h-[73%] w-full rounded-xl"/>
                                <p className="text-center font-semibold my-3">{project.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}