import React, { useState } from 'react'

export default function SmallNotice() {
    const [notice, setNotice] = useState();
    const noticeList = [
        {
            id : 1,
            time : "11:00 AM",
            day : "WED",
            title : "Scrum meeting in 15 mins",
        },
        {
            id : 2,
            time : "01:20 PM",
            day : "THURS",
            title : "Group presentation today at 4",
        },
        {
            id : 3,
            time : "9:45 AM",
            day : "MON",
            title : " Today office chutti",
        },
        {
            id : 4,
            time : "4:32 PM",
            day : "FRI",
            title : "Presentation cancelled",
        },

    ]
    return (
        <div className='my-4 border border-black p-2 rounded-xl bg-white'>
            <h1 className='px-2'>Today's Notices</h1>
            {
                noticeList.map((officeNotice) => {
                    return(
                        <div key={officeNotice.id}>
                            <div className='flex px-2 text-sm divide-x-2 divide-blue-300 mt-4'>
                                <div className='w-[25%]'> {officeNotice.time} <br /> {officeNotice.day} </div>
                                <div className='px-2 w-[60%]'>  {officeNotice.title}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
