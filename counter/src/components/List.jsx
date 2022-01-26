function List(props){
    return(
        <ul>
            {
                props.items.map(hobby => <li>{hobby}</li>)
            }

        </ul>
    )

}
export default List;