import React from 'react'
import Signup from '../components/Signup'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'
import ForgotPassword from '../components/ForgotPassword'
import UpdateProfile from '../components/UpdateProfile'
import PageNotFound from '../components/PageNotFound'

const allRoutes = [
    {
        path:'/', 
        element: <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
    },
    {
        path:'/update-profile', 
        element: <PrivateRoute>
        <UpdateProfile/>
      </PrivateRoute>
    },
    {
        path: '/signup', 
        element: `${<Signup/>}`
    }
]
export default allRoutes