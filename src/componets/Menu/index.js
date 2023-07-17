import { AiOutlineHome, 
        AiOutlineLike, 
        AiOutlineEye, 
        AiOutlinePicture
    } from 'react-icons/ai'

import {WiSunset} from 'react-icons/wi'
import './Menu.css'
    
const Menu = () => {
    return(
        <nav className='menu'>
            <ul>
                <li>
                    <AiOutlineHome className='menu__component' />
                    <a href='/'>Home</a>
                </li>
            </ul>

            <ul>
                <li>
                    <AiOutlineLike className='menu__component'/>
                    <a href='/'>More likes</a>
                </li>
            </ul>

            <ul>
                <li>
                    <AiOutlineEye className='menu__component' />
                    <a href='/'>Most viewed</a>
                </li>
            </ul>

            <ul>
                <li>
                    <AiOutlinePicture className='menu__component' />
                    <a href='/'>News</a>
                </li>
            </ul>

            <ul>
                <li>
                    <WiSunset className='menu__component' />
                    <a href='/'>Surprise me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu