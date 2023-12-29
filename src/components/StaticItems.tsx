import Chair from '../images/Chair.png'
import Vase from '../images/Vase.png'

const StaticItems = () =>{

    return (
        <div className='static-items'>
            <div className = "first-img">
                <img src = {Chair} alt = "chair"/>
                <p>INY VINTAGE CHAIR</p>
            </div>
            <div className = "second-img">
                <img src = {Vase} alt = "terrcotta vase"/>
                <p>LARGE TERRACOTTA VASE</p>
            </div>
        </div>
    )
}

export default StaticItems;