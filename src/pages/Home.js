import Header from "../componets/Header"
import Menu from "../componets/Menu"

import './Home.css'

import banner from '../assets/bannerPort.jpg'

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <section>
                    <Menu />
                    <div className="section__banner">
                        <h1 className="section__banner-title"> Venha conhecer Portugal </h1>
                        <img className="section__banner-img" src={banner} alt=""/>
                    </div>
                </section>

            </main>
        
        </>
    )
}

export default Home