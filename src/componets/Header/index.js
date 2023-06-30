import logo from "./tuga.png"
import search from "./search.png"

import"./header.css"

const Header = () => {
    return(
        <header className="header" >
            <img src={logo} alt="Logo euro tuga"/>

            <div className="header__conatiner">
                <input type='text' placeholder="O que você procura?" className='header__input' />
                <img src={search} alt='lupa' />
            </div>

        </header>

        
    )
}

export default Header