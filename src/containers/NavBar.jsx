import React from 'react'
import profImg from "../assets/images/profImg.png";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function NavBar() {
    return (
        <div className='h-16 bg-[#ffffff] border-b-2 w-[100%] shadow-sm items-center'>
            <div className='flex items-center justify-end '>
                <IoIosNotificationsOutline className='cursor-pointer' size={25}/> 
                <button className="p-3 ">    
                    <img src={profImg} className="h-10 " alt="profile" />
                </button>
            </div>
        </div>
    )
}
