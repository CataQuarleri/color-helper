import React, {useState} from 'react'
import {PopoverPicker} from '../components/PopoverPicker'
import { Card, Button } from 'react-bootstrap'
import { useColor } from '../contexts/ColorContex'
import ColorScheme from '../api/ColorScheme'

export default function ColorHelper() {
  const { currentColor, setCurrentColor } = useColor()

  return (
    <>
    <Card.Body>
    <Button onClick={ColorScheme()}>Apretame</Button>
      <PopoverPicker currentcolor={currentColor} onChange={setCurrentColor}/>
    </Card.Body>
    </>
  )
}
