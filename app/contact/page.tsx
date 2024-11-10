"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState,ChangeEvent } from "react";
import {db} from "../../app/firebaseConfig"
import {collection,addDoc} from "firebase/firestore"


async function addDatatoFirestore(name:string,email:string,phone:string,message:string){
    try {
        const docRef=await addDoc(collection(db,"messages"),{
            name:name,
            email:email,
            phone:phone,
            message:message
        });
        console.log("Docuemnt written with Id:",docRef.id)
        return true
    } catch (error) {
        console.error("Error Adding Data",error)
        return false
    }
    }

export default function Contact(){



    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })
    const [isformValid,setIsFormValid]=useState<boolean>(true)
const handelSubmit=async(e:any)=>{
    e.preventDefault()

const {name,email,phone,message}=formData
if(!name || !email || !phone || !message){
    setIsFormValid(false)
}
else{
    setIsFormValid(true)
    
    const added=await addDatatoFirestore(name,email,phone,message)
    if(added){
        alert("Thank you!.Your message has been submitted.")
        setFormData({
            name:"",
            email:"",
            phone:"",
            message:""
        })
    }
   
}
}


const handleInputChange=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
const {name,value}=e.target
setFormData((prevData)=>({...prevData,[name]:value}))

}
    return(
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="p-8 max-w-md w-full bg-white rounded-lg space-y-3 text-black">
                    <h1 className="text-center font-extrabold text-3xl ">Contact Me</h1>
                    <form onSubmit={handelSubmit} className="space-y-3">
                 <div>
                    <Label className=" font-semibold">Name:</Label>
                    <Input
                    type="text"required
                    value={formData.name}
                    name="name"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                    className="w-full focus:outline-none"
                    />
                 </div>
                 <div>
                    <Label className=" font-semibold">Email:</Label>
                    <Input
                    type="email"required
                    value={formData.email}
                    name="email"
                    placeholder="Your Email"
                    onChange={handleInputChange}
                    className="w-full focus:outline-none"
                    />
                 </div>
                 <div>
                    <Label className=" font-semibold">Phone Number:</Label>
                    <Input
                    placeholder="Your Phone Number"required
                    name="phone"
                    value={formData.phone}
                    type="text"
                    onChange={handleInputChange}
                    className="w-full focus:outline-none"
                    />
                 </div>
                 <div>
                    <Label className=" font-semibold">Message:</Label>
                    <Textarea
                    placeholder="Your Message..."required
                    value={formData.message}
                    name="message"
                    className="w-full focus:outline-none resize-none"
                    onChange={handleInputChange}
                    rows={8}
                    />
                 </div>
                 
                 {!isformValid &&(
                    <div>
                        <p className="text-red-500 text-center">Please fill out all the fields</p>
                    </div>
                 )}
                 <div className="flex justify-center">
                    <Button
                    type="submit"
                    
                    className="bg-red-500 hover:bg-red-400 font-bold mt-2">Submit</Button>
                 </div>
                 </form>
                </div>
            </div>
        </div>
        
    )
}