import fotosPopulares from './fotos-populares.json'
import './Popular.css'
const Popular = () => {
    return(
        <aside className='popular'>
            <h2>Popular</h2>
            <ul className='popular__imagens'>
                {fotosPopulares.map((fotoPopular) => {
                    return(
                        <li key={fotoPopular.id}>
                            <img src={fotoPopular.path} alt={fotoPopular.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>See more photos</button>
        </aside>
    )
}

export default Popular