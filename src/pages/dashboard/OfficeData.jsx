import React from 'react'
import { IoIosPeople } from 'react-icons/io'
import { MdOutlineBackHand, MdOutlineDoNotTouch, MdSafetyDivider } from 'react-icons/md'
// import BarChart from './BarChart'

export default function OfficeData() {
    
    const employeeData = [
        {
            id : 1,
            title : "No. of Employees",
            icon : <IoIosPeople/>,
            number : "26",
        },
        {
            id : 2,
            title : "No. of Departments",
            icon : <MdSafetyDivider/>,
            number : "6",
        },
        {
            id : 3,
            title : "Present Employees",
            icon : <MdOutlineBackHand/>,
            number : "22",
        },
        {
            id : 4,
            title : "Absent Employees",
            icon : <MdOutlineDoNotTouch/>,
            number : "4",
        },
    ]
    return (
            <div className='border-2  w-full bg-white rounded-md p-4 pb-5 '>
                <p className='mb-3 text-lg'>Employees Data </p>
                <div className='flex flex-row gap-3 content-baseline '>
                    {
                        employeeData.map((empData) => {
                            return(
                                <div  key={empData.id} className={`${empData.id===1?"bg-[#DCCDE1]":empData?.id===2?"bg-[#B7C1CC]":empData?.id===3?"bg-[#b7dcac]":"bg-[#eac0ae]"} 
                                                py-3 basis-1/4 rounded-lg shadow-md  flex flex-col items-center justify-center`}>
                                        <div className={`rounded-xl p-1 text-white ${empData.id===1?"bg-[#c567e7]":empData?.id===2?"bg-[#648fbd]":empData?.id===3?"bg-[#6bc153]":"bg-[#eb8a60]"}`}>
                                            {empData.icon}
                                        </div>
                                    <h2 className='mt-2 mb-2 text-xl'><b>{empData.number}</b></h2>
                                    <p className='text-center text-xs'>{empData.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}
