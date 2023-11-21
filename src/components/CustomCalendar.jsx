import React from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";


export default function CustomCalendar() {
    return (
        <div>
            <div className=''>
                <Calendar className="  rounded-xl border " />
            </div>
        </div>
    )
}
