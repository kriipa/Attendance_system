
import React from 'react'
import Login from '../pages/Login'
import SideNav from '../containers/SideNav'
import NavBar from '../containers/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function DashboardLayout() {
    return (
        <div>    
            <div className='flex'>
                <SideNav/>
                <div className='w-[83%] h-[100vh] overflow-auto'>
                    <div className='sticky top-0'>
                        <NavBar/>
                    </div>
                    <div className='bg-[#F3F4F7] h-screen p-4'>
                        <Outlet/>
                    </div>
                    {/* <Footer/> */}
                </div>
            </div>
            
        </div>
    )
}
