import Header from "../componets/Header"
import Menu from "../componets/Menu"
import Footer from "../componets/Footer"


import './Home.css'

import banner from '../assets/bannerPort.jpg'
import Gallery from "../componets/Gallery"
import Popular from "../componets/Popular"

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <section className="section">
                    <Menu />
                    <div className="section__banner">
                        <h1 className="section__banner-title"> Come and discover Portugal </h1>
                        <img className="section__banner-img" src={banner} alt=""/>
                    </div>
                </section>
                
                <div className="home__galeria">
                    <Gallery />
                    <Popular />
                </div>
            </main>

            
            <Footer />
        
        </>
    )
}

export default Home