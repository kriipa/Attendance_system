import React from 'react'
import InputField from '../components/InputField'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

export default function CreateEmployees() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fullName : "",
            emailAddress : "",
            address : "",
            phoneNumber : "",
            employeeId : "",
            role : "",
        }
    });
    
    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(data => console.log(data))} className='border rounded-md border-gray-500 py-5 px-9 bg-white' action="">
                <div className='flex gap-3'>
                    <div>
                        <InputField label={"Full Name"} placeHolder={"Enter employee's name "} register={register} registerName={"fullName"}/>
                    </div>
                    <div>
                        <InputField label={"Email Address"} placeHolder={"Enter Email address "} register={register} registerName={"emailAddress"}/>
                    </div>
                    
                </div>
                <div className='flex gap-3'>
                    <div>
                        <InputField label={"Address"} placeHolder={"Enter Address "} register={register} registerName={"address"}/>
                    </div>
                    <div>
                        <InputField label={"Phone number"} placeHolder={"Enter Phone Number "} register={register} registerName={"phoneNumber"}/>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <InputField label={"Employee Id"} placeHolder={"Enter  Employee's Id"} register={register} registerName={"employeeId"}/>
                    </div>
                    <div>
                        <InputField label={"Role"} placeHolder={"Enter Employee's role "} register={register} registerName={"role"}/>
                    </div>
                </div>
                <div className='flex justify-end gap-2'>
                    <Button buttonName={"Cancel"} type={"danger"}/>
                    <Button buttonName={"Submit"}/>
                </div>
            </form>
        </div>
    )
}
