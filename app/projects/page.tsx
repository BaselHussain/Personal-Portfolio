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
    image:"/images/digital clock.jpg",
    title:"Digital Clock",
    link:"https://digital-clock-flax-three.vercel.app/"
},{
    id:2,
    image:"/images/expense tracker.jpg",
    title:"Expense Tracker App",
    link:"https://expense-tracker-app-crne.vercel.app/"
},{
    id:3,
    image:"/images/password.jpg",
    title:"Password Generator App",
    link:"https://password-generator-one-blond.vercel.app/"
},{
    id:4,
    image:"/images/bmi.jpg",
    title:"B.M.I Calculator",
    link:"https://bmi-calculator-two-amber-61.vercel.app/"
},{
    id:5,
    image:"/images/color picker.jpg",
    title:"Color Picker App",
    link:"https://color-picker-app-theta.vercel.app/"
},{
    id:6,
    image:"/images/html.jpg",
    title:"HTML Previewer",
    link:"https://html-previewer-app-seven.vercel.app/"
}]

export default function Projects(){
    return(
        <div>
            <div className="container my-10">
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
                    <div className="flex flex-wrap space-x-4 w-full justify-around">
                        {projects.map((project)=>(
                            <div key={project.id} className="flex flex-col  bg-gray-900 border border-white rounded-xl m-2 w-1/3 max-w-[300px] mb-24 hover:-translate-y-4">
                                <a href={project.link} target="_blank">
                                <Image src={project.image} width={250} height={450} alt="as" className="w-full rounded-xl"/>
                                <p className="text-center font-semibold my-3">{project.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}