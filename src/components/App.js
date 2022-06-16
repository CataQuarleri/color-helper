import React from 'react'
import Main from './Main'
import { Container } from "react-bootstrap"
import '../App.css'

function App() {
  return (
    <Container className="d-flex flex-column align-items-around justify-content-center" bg="#fffffb">
             <Main/>
  </Container>
  )
}

export default App;
