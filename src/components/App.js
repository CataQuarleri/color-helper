import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import PageNotFound from './PageNotFound'
import Navigation from './Navbar'
import GuestRoute from './GuestRoute'
// import AllRoutes from '../config/routes'
import { Container } from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Container 
    className="d-flex flex-column align-items-around justify-content-center" 
    // style={{minHeight: "100vh"}}
    >
      <Router>
      <AuthProvider>
    <Navigation/>
    <div className="w-100 align-self-center" style={{maxWidth: '400px'}}>
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
        <Route path="/signup" 
        element={<GuestRoute>
          <Signup/>
        </GuestRoute>
        }/>
        <Route path="/login" 
        element={<GuestRoute>
          <Login/>
        </GuestRoute>}/>
        <Route path="/forgot-password" element={<GuestRoute>
          <ForgotPassword/>
        </GuestRoute>}/>
        <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
    </div>
      </AuthProvider>
      </Router>
  </Container>
    
  )
}

export default App;
