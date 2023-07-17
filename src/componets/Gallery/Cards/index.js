import Card from './Card'


const Cards = ({itens}) => {
    return(
        <ul className="galeria__cards">
            {itens.map((item) => {
                return(
                    <Card  key={item.id} item={item} />
                )
            })}
        </ul>
    )
}

export default Cards