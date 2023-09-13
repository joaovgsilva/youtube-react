import Item from './Item';

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ford Ka' />
                <Item marca='Honda Civic' />
            </ul>
        </>
    )
}

export default List;