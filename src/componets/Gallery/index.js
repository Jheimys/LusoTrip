import Tags from "../Tags"
import './Gallery.css'
import fotos from './fotos.json'

import open from './open.png'
import favorito from './favorito.png'

const Gallery = () => {
    return(
        <section className="galeria">
            <h2>Browse the gallery</h2>
            <Tags />
            <ul className="galeria__cards">
                {fotos.map((foto) => {
                    return(
                        <li key={foto.id} className="galeria__card">
                            <img 
                                className="galeria__imagem"
                                src={foto.imagem}
                                alt={foto.titulo}
                            />

                            <p className="galeria__descricao">{foto.titulo}</p>

                            <div>
                                <p>{foto.creditos}</p>
                                <span>
                                    <img  src={open} alt='icone open' />
                                    <img  src={favorito} alt='icone favorito' />
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Gallery