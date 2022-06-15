import axios from 'axios'
import { useColor } from '../../contexts/ColorContex'

async function ColorScheme (){
    const { currentColor } = useColor()
    let colorPicked = currentColor.replace(/\D/g, "")
    const URL = `https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=analogic-complement`
    try {
        await axios.get(URL)
        .then( response => {
            const colorScheme = response.data.colors
            console.log('get response', colorScheme);
        });
    }
    catch(error){
        console.log(error);
    }
}
export default ColorScheme