// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import { useColor } from '../../contexts/ColorContex'


// function ColorScheme(){
//         const [schemeArray, setSchemeArray] = useState([])
//         const { currentColor } = useColor()
//         let colorPicked = currentColor.replace("#", "")
//        console.log(colorPicked)
//         const URL = `https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=analogic`

//         useEffect(()=>{
//             newScheme = schemeArray
//     try {
//      axios.get(URL)
//         .then( response => {
//             setSchemeArray(response.data.colors)
//             console.log('get response', schemeArray);
//         });
//     }
//     catch(error){
//         console.log(error);
//     }
// }, [currentColor])



// const renderScheme = schemeArray.map(color=><img src={color.image.named}/>)

// return(
//     <>
//         {renderScheme}
        
//     </>
// )
// }

// export default newScheme;

// export {ColorScheme}