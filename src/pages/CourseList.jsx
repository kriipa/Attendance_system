import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CourseList() {
    const [courses, setCourses] = useState();
    // const handleGet = () => {
    //     const getToken = localStorage.getItem('items')
    // }

        const getToken = localStorage.getItem("accessToken");
        const getAccessToken = JSON.parse(getToken);

    const baseUrl = "https://adminbackend.unentrance.com/api/v1/course/list/";

    useEffect(() => {
        axios.get(`${baseUrl}`, {headers: {
            Authorization: `Bearer ${getAccessToken}`
        }}).then((response) => {
                setCourses(response.data)
                console.log('response course', response)
            
            })
    },[])
    console.log('courses', courses)

    return (
        <div>
            {
                courses && courses?.map((courseList) => {
                    console.log("course list ", courseList)
                    return(
                        <div>

                        </div>
                    )
                })
            }
        </div>
    )
}
