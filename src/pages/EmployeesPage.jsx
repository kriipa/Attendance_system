import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function EmployeesPage() {
    const navigate = useNavigate();

    const handleEmployees = () => {
        navigate("/create-employees")
    }
    return (
        <div>
            <Button handleChange={() => handleEmployees()} buttonName={"Create Employees"}/>
        </div>
    )
}
