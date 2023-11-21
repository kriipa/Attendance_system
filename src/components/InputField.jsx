import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'

export default function InputField({placeHolder, label, register, registerName, type, icon}) {
    return (
        <div className='flex flex-col'>
            <label className='text-sm mb-2'>{label}</label>
            <div className='flex items-center'>
                {icon}
                <input className='p-2 border text-zinc-700 rounded-md border-slate-500 focus:border-sky-600  text-sm mb-3 outline-none'
                    placeholder={placeHolder}  {...register(`${registerName}`)}
                    type={type === "password"? 'password': type === "email"? 'email': ""}  
                />
            </div>
        </div>
    )
}
