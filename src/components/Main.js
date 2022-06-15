import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import PageNotFound from './PageNotFound'
import Navigation from './Navbar'
// import AllRoutes from '../config/routes'
import { Container } from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <Container 
    className="flex-column align-items-center justify-content-center" 
    style={{minHeight: "100vh"}}>
    <Navigation/>
    <div className="w-100" style={{maxWidth: '400px'}}>
      <Router>
      <AuthProvider>
        <Routes>
          {/* {AllRoutes.map(route=>{
            <Route path={route.path}
            element={route.element}/>}
          )} */}
        <Route exact path="/" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path="/update-profile" element={
          <PrivateRoute>
            <UpdateProfile/>
          </PrivateRoute>
        }/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  </Container>
    
  )
}

export default Main;