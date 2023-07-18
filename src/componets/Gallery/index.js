import { useState } from "react"
import Tags from "../Tags"
import Cards from "./Cards"

import './Gallery.css'
import fotos from './fotos.json'


const Gallery = () => {
    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map((valor) => valor.tag))] 

    const filtarFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return(
                foto.tag === tag
            )
        })

        setItens(novasFotos)
    }

    return(
        <section className="galeria">
            <h2>Browse the gallery</h2>
            <Tags tags={tags}  filtarFotos={filtarFotos} setItens={setItens} />
            <Cards itens={itens} />
        </section>
    )
}

export default Gallery