import React from 'react'
import { Route,Routes} from "react-router-dom"
import AdminPanel from '../Pages/AdminPanel'
import ForgotPasswordForm from '../Pages/ForgetPass'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Signup from '../Pages/Signup'
import Sprint from '../Pages/Sprint'
import SprintDetails from '../Pages/SprintDetails'
import Tasks from '../Pages/Tasks'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/forget' element={<ForgotPasswordForm />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/dash' element={<AdminPanel />}/>
        <Route path='/tasks' element={<Tasks />}/>
        <Route path='/sprint' element={<Sprint />}/>
        <Route path='/sprint/:id' element={<SprintDetails />}/>
    </Routes>
  )
}

export default AllRoutes