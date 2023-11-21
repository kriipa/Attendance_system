import React, { useState } from 'react'
import Button from '../components/Button'
import {useForm} from  'react-hook-form';
import InputField from '../components/InputField';
import loginImage from '../assets/images/attendanceImp-removebg-preview.png'
import { BsFillPersonFill } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const inputData = [
        {
            id: 1,
            title: "Name",
            registerName: "name",
            placeholder: "Enter your name",
            icon: <BsFillPersonFill/>
        },
        {
            id: 2,
            title: "Password",
            registerName: "password",
            placeholder: "Enter your password",
            icon: <RiLockPasswordFill/>
        },
    ]

    const handleStorage = () => {
        localStorage.setItem('items', JSON.stringify(signin))
    }

    const AccessTokenURL = "https://adminbackend.unentrance.com/auth/v1/token/access/";



    const handleSubmitLog = (data) => {
        console.log(data)
        axios.post("https://adminbackend.unentrance.com/auth/v1/account/login/", data)
        .then((response) => {
            if(response.status===200){
                localStorage.setItem('accessToken', JSON.stringify(response.data.data.access))
                localStorage.setItem('refreshToken', JSON.stringify(response.data.data.refresh))
                console.log('response', response)
                navigate("/")
            }
            console.log("resp", response.status)
        })
        
        // if(data.name==="kripa" && data.password==="kripa123"){
        //     navigate("/")
        //     console.log("logged in")
        // }
        // else{
        //     console.log("cannot log in")
        // }
    }

    // const handleToken = (data) => {
    //     console.log('Tokendata', data)
    //     axios.post("https://adminbackend.unentrance.com/auth/v1/token/access/", data)
    // }



    
    const {register, handleSubmit,  formState: {errors}} = useForm({
        defaultValues: {
            identity: "",
            password: ""
        }
    })
    return (
        <div className='flex bg-slate-100 w-screen justify-center items-center h-screen '>
            <div className='flex rounded-md p-3'>
                <div className='w-1/2 bg-opacity-40 md:hidden'>
                    <img className='h-[500px] md:h-56 object-cover' src={loginImage} alt="" />
                </div>
                <form className=' mx-10 my-12 w-1/2  p-12 md:w-[450px]'
                    onSubmit={handleSubmit(handleSubmitLog)}>
                        <div className='flex flex-col bg-white pb-12 px-6 py-9    shadow-sm'>
                            <div className='flex justify-start mb-9 ms-3 mt-2'>
                                <h1 className='text-4xl'><b>Sign up</b></h1>
                            </div>
                            <div className="px-4 mb-9 ">
                                <div className='flex items-center border-b mb-5 border-black '>
                                    <BsFillPersonFill className=''/>
                                    {/* <InputField placeHolder={"Enter your name"} register={register} registerName={"identity"} type={"text"}/> */}
                                    <input {...register("identity")} className='p-2 w-[230px] text-sm outline-none' placeholder='Enter your name' type="text" />
                                </div>
                                <div className='flex items-center mt-2 border-b border-black justify-between'>
                                    <div className='flex items-center'>
                                        <RiLockPasswordFill className=''/>
                                        <input {...register("password")} className='p-2 w-[230px] text-sm outline-none' placeholder='Enter your password' type={show? "text": "password"} />
                                        {/* <InputField placeHolder={"Enter your password"} register={register} registerName={"password"} type={"password"}/> */}
                                    </div>
                                        <p className='cursor-pointer justify-end flex  ms-2' onClick={()=>{setShow(!show)}}>{show? <FaRegEye/>: <FaRegEyeSlash/>}</p>
                                </div>
                            </div>
                            <div className='mt-5 flex justify-center px-2'>
                                {/* <Button onClick={()=> handleStorage()} buttonName = {"Log in"} /> */}
                                <button onClick={()=> handleStorage()} 
                                    className='bg-yellow-500 text-white hover:bg-yellow-400 hover:shadow-md py-2 rounded-md w-[302px]'>
                                        Log in
                                </button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}
