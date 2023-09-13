import Item from './Item';

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ford Ka' ano_lancamento={2009} /> {/* propriedade number é passada através de {} */}
                <Item marca='Honda Civic' ano_lancamento={2009} />
                <Item />
            </ul>
        </>
    )
}

export default List;