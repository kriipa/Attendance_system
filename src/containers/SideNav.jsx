import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LuLayoutDashboard } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import { AiOutlinePartition } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { PiBellRinging } from "react-icons/pi";

export default function SideNav() {

    const [active, setActive] = useState();
    const[change, setChange] = useState(false);

    const navList = [
    {
        id: 1,
        title: "Dashboard",
        icon: <LuLayoutDashboard />,
        link: "/",
    },
    {
        id: 2,
        title: "Employees",
        icon: <BsPeople />,
        link: "/employees",
    },
    {
        id: 3,
        title: "Department",
        icon: <AiOutlinePartition />,
        link: "/department",
    },
    {
        id: 4,
        title: "Calender",
        icon: <SlCalender />,
        link: "/calender",
    },
    {
        id: 5,
        title: "Notices",
        icon: <PiBellRinging />,
        link: "/notices",
    },
    {
        id: 6,
        title: "Course List",
        icon: <PiBellRinging />,
        link: "/course-list",
    },
    {
        id: 7,
        title: "Login",
        icon: <PiBellRinging />,
        link: "/login",
    },
    ]

    console.log(active);

    useEffect(() => {
        setActive(window.location.pathname);
    },[change]);


    return (
        <div className="h-screen flex flex-col justify-between w-[17%] shadow-md p-4 border-1 md:min-w-[70px]">
        <div className="flex flex-col">
            <h1 className="flex justify-center text-3xl text-gray-600 mb-7 white-space:nowrap md:text-sm ">
                <b> Ayata Inc. </b>
            </h1>
            <div>
            {
                navList.map((menu) => {
                    return (
                    <div key={menu.id}>
                        <Link to={menu.link}>
                            <div onClick={() => setChange(!change)}
                                className={`flex font-medium text-slate-500 gap-3 px-3 py-[6px] mb-3  items-center hover:bg-[#63B5EB] hover:text-white rounded-md 
                                    ${active === menu.link ? "text-white bg-[#51a6df]" : ""} md:w-[40px] md:justify-center`
                                }>
                                {menu.icon}
                                <p className="md:hidden md:absolute">
                                    {menu.title}
                                </p>
                            </div>
                        </Link>
                    </div>
                    );
                })
            }
            </div>
        </div>

        <div className="flex font-medium items-center text-red-700  gap-3 px-2 py-1 mb-2 cursor-pointer ">
                <BiLogOut />
            <p className="md:hidden md:absolute">Logout</p>
        </div>
        </div>
    );
}
