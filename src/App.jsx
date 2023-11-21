import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import DashboardLayout from './layout/DashboardLayout'
import Login from './pages/Login'
import DashPage from './pages/DashPage'
import EmployeesPage from './pages/EmployeesPage'
import DepartmentPage from './pages/DepartmentPage'
import CalenderPage from './pages/CalenderPage'
import CustomCalendar from './components/CustomCalendar'
import NoticePage from './pages/NoticePage'
import CreateEmployees from './forms/CreateEmployees'
import CourseList from './pages/CourseList'
import Token from './pages/Token'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route element={<DashboardLayout/>}>
          <Route path='/' element={<DashPage />}/>
          <Route path='/employees' element={<EmployeesPage />}/>
          <Route path='/department' element={<DepartmentPage />}/>
          <Route path='/calender' element={<CalenderPage />}/>
          <Route path='/notices' element={<NoticePage />}/>
          <Route path='/create-employees' element={<CreateEmployees />}/>
          <Route path='/course-list' element={<CourseList />}/>
          <Route path='/token' element={<Token />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
