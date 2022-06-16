import React from 'react'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import PrivateRoute from '../components/PrivateRoute'
import ForgotPassword from '../pages/ForgotPassword'
import UpdateProfile from '../pages/UpdateProfile'
import PageNotFound from '../pages/PageNotFound'
import GuestRoute from '../components/GuestRoute'
import ColorHelper from '../pages/ColorHelper'

import { Routes, Route } from 'react-router-dom'

function AllRoutes(){
  return(
    <div className="w-100 align-self-center m-5 p-5" style={{maxWidth: '600px'}}>
    <Routes>
    <Route exact path="/" element={
        <ColorHelper/>}/>
    <Route path="/profile" element={
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
    }/>
    <Route path="/update-profile" element={
      <PrivateRoute>
        <UpdateProfile/>
      </PrivateRoute>
    }/>
    <Route path="/signup" 
    element={<GuestRoute>
      <Signup/>
    </GuestRoute>
    }/>
    <Route path="/login" 
    element={<GuestRoute>
      <Login/>
    </GuestRoute>}/>
    <Route path="/forgot-password" element={
    <GuestRoute>
      <ForgotPassword/>
    </GuestRoute>}/>
    <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
</div>
  )
}
export default AllRoutes