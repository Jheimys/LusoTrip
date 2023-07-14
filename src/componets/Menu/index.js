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
                    <a href='/'>Início</a>
                </li>
            </ul>

            <ul>
                <li>
                    <AiOutlineLike className='menu__component'/>
                    <a href='/'>Mais curtidas</a>
                </li>
            </ul>

            <ul>
                <li>
                    <AiOutlineEye className='menu__component' />
                    <a href='/'>Mais vistas</a>
                </li>
            </ul>

            <ul>
                <li>
                    <AiOutlinePicture className='menu__component' />
                    <a href='/'>Novas</a>
                </li>
            </ul>

            <ul>
                <li>
                    <WiSunset className='menu__component' />
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu