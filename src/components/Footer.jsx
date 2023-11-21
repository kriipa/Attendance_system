import React from 'react';
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <div className='bg-slate-400 flex gap-4 h-7 justify-center sticky text-sm items-center'>
            <p> <AiOutlineCopyrightCircle/> </p>
            <p> Ayata Inc. </p>
            <p>Privacy Policy</p>
        </div>
    )
}
