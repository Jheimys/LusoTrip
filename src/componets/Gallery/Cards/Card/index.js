import open from './open.png'
import favorito from './favorito.png'

const Card = ({item}) => {
    return(
        <li key={item.id} className="galeria__card">
        <img 
            className="galeria__imagem"
            src={item.imagem}
            alt={item.titulo}
        />

        <p className="galeria__descricao">{item.titulo}</p>

        <div>
            <p>{item.creditos}</p>
            <span>
                <img  src={open} alt='icone open' />
                <img  src={favorito} alt='icone favorito' />
            </span>
        </div>
    </li>
    )
}

export default Card