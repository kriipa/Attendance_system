import React from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import SmallNotice from './dashboard/SmallNotice';


export default function CalenderPage() {
    return (
        <div className='h-full'>
            <div className=' inline-block'>
                <Calendar className="rounded-xl shadow-md  border w-[800px] h-80 p-2" />
            </div>
        </div>
    )
}
