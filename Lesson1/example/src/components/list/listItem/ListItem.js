import React from 'react';

const ListItem = (props) => {
    console.log(props)
    const { user, deleteCard } = props
    return (
        <li>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <button type="button" onClick={deleteCard} data-id={user.id}>Delete</button>
        </li>
    );
}

export default ListItem;