import React, {useContext, useState, useReducer, useEffect} from 'react';
import axios from 'axios'
import { useColor } from './ColorContex'

import schemeReducer, {initialState, ACTIONS} from '../components/schemeReducer'

const SchemeContext = React.createContext(initialState)

export function useScheme(){
    return useContext(SchemeContext)
}

export const SchemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(schemeReducer, initialState)
    const [schemeArray, setSchemeArray] = useState([])
    const { currentColor } = useColor()
    let colorPicked = currentColor.replace("#", "")
   console.log(colorPicked)
    const URL = `https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=analogic`

    useEffect(()=>{
try {
 axios.get(URL)
    .then( response => {
        setSchemeArray(response.data.colors)
        console.log('get response', schemeArray);
    });
}
catch(error){
    console.log(error);
}
}, [currentColor])

    const renderScheme = schemeArray.map(color=><img src={color.image.named}/>)

    const updateTotal = (schemes) =>{
        let total = schemes.length;
        dispatch({
            type: ACTIONS.UPDATE_TOTAL,
            payload: {
                total
            }
        })
    }
    console.log("STATE", state)
    const addScheme = (scheme)=>{
        const updatedSchemes = [state.favoriteSchemes, scheme];
        updateTotal(updatedSchemes);
        dispatch({
            type: ACTIONS.ADD_SCHEME,
            payload: {
                favoriteSchemes: updatedSchemes
            }
        });
    };
    const deleteScheme = (scheme)=>{
        const updatedSchemes = state.favoriteSchemes.filter((currentScheme) => currentScheme.seed.name.value !== scheme.seed.name.value)
        updateTotal(updatedSchemes);
        dispatch({
            type: ACTIONS.DELETE_SCHEME,
            payload: {
                favoriteSchemes: updatedSchemes
            }
        });

 
    }

    const value = {
      addScheme,
      deleteScheme,
      total: state.total,
      favoriteSchemes: state.favoriteSchemes,
      renderScheme,
      schemeArray
    };
    return <SchemeContext.Provider value={value}>{children}</SchemeContext.Provider>
}