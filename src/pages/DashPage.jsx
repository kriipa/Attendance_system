import React from 'react'
import OfficeData from './dashboard/OfficeData'
import CalenderPage from './CalenderPage'
import CustomCalendar from '../components/CustomCalendar'
import SmallNotice from './dashboard/SmallNotice'

export default function DashPage() {
    return (
        <div>
            <div className='flex items-start gap-4'>
                <div className='inline-block w-[60%]'>
                    <OfficeData/>
                </div>
                <div>
                    <CustomCalendar/>
                    <SmallNotice/>
                </div>
            </div>
        </div>
    )
}
