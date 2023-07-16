import Header from "../componets/Header"
import Menu from "../componets/Menu"
import Footer from "../componets/Footer"


import './Home.css'

import banner from '../assets/bannerPort.jpg'
import Gallery from "../componets/Gallery"

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <section className="section">
                    <Menu />
                    <div className="section__banner">
                        <h1 className="section__banner-title"> Venha conhecer Portugal </h1>
                        <img className="section__banner-img" src={banner} alt=""/>
                    </div>
                </section>
                
            </main>

                <div className="home__galeria">
                    <Gallery />
                </div>
            
            <Footer />
        
        </>
    )
}

export default Home