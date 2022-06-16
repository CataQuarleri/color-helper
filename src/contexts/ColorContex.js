import React, { useContext, useState } from 'react'

const ColorContext = React.createContext()

export function useColor(){
    return useContext(ColorContext)
}

export function ColorProvider({children}) {
    const [currentColor, setCurrentColor] = useState('#9b29d4')
    const value = {
        currentColor, 
        setCurrentColor
    }
  return (
    <ColorContext.Provider value={value}>
        {children}
    </ColorContext.Provider>
  )
}