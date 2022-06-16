import React, {useState} from 'react'
import { Card, Row, Button } from 'react-bootstrap'
//custom hooks
import { useColor } from '../contexts/ColorContex'
import { useScheme } from '../contexts/SchemeContext'
//components
import {PopoverPicker} from '../components/PopoverPicker'


export default function ColorHelper() {
  const { currentColor, setCurrentColor } = useColor()
  const {addScheme, schemeArray, renderScheme} = useScheme()
  const handleClick = (e) => {
    // const favoriteScheme = { data: schemeArray.colors};
    addScheme(schemeArray)
  }
  console.log("SCHEME EN HELPER", schemeArray)
  return (
    <>
  <div className="d-grid gap-2"> 
    <Button className="mb-3" variant="outline-secondary" onClick={handleClick}>Save to favorites</Button>
  </div>
 
<div> {renderScheme}</div>
      {/* <ColorScheme/> */}
    <Card.Body>
      <PopoverPicker currentcolor={currentColor} onChange={setCurrentColor}/>
    </Card.Body>
    </>
  )
}
