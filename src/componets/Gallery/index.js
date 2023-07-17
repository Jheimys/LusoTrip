import Tags from "../Tags"
import Cards from "./Cards"

import './Gallery.css'
import fotos from './fotos.json'


const Gallery = () => {
    return(
        <section className="galeria">
            <h2>Browse the gallery</h2>
            <Tags />
            <Cards itens={fotos} />
        </section>
    )
}

export default Gallery