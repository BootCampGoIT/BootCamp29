import React from 'react';
import ListItem from './listItem/ListItem';

// const props = {
//     data: data
//     }

// const { data } = props;


const listStyle = {
    listStyle: "none",
}

const List = ({ data, getMesage }) => {
    return (

        <ul className="list" style={listStyle}>
            {data.products.map(product => <ListItem product={product} key={product.id} getMesage={getMesage} />)}
        </ul>
    );
}

export default List;