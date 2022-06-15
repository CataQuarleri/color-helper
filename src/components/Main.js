import React from 'react'
import Navigation from './Navbar'
import AllRoutes from '../config/routes'
import { Card } from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext'
import { ColorProvider } from '../contexts/ColorContex'
import {BrowserRouter as Router} from 'react-router-dom'

function Main() {
  return (
          <ColorProvider>
    <Router>
      <AuthProvider>
        <Card.Header>
          <Navigation/>

        </Card.Header>
            <AllRoutes/>
        <Card.Footer className="text-muted text-align-center">Copyright Cata Quarleri 2022</Card.Footer>
      </AuthProvider>
    </Router>
          </ColorProvider>
  )
}

export default Main;