import './Tags.css'
import fotos from"../Gallery/fotos.json"

const Tags = ({ tags, filtarFotos, setItens }) => {
    return(
        <div className='tags'>

            <p >Filter by tags:</p>

            <ul className='tags__lista'>
               {tags.map((tag) => {
                return(
                    <li key={tag} onClick={() => filtarFotos(tag)}>{tag}</li>
                )
               })}

               <li onClick={() => setItens(fotos)}>All</li>
            </ul>
            
        </div>
    )
}

export default Tags