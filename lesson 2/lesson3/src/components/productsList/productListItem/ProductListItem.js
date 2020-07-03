import React from 'react';

const ProductListItem = ({ product, deleteProduct }) => {
    return (
        <li data-id={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button type="button" onClick={deleteProduct}>Удалить!</button>
        </li>
    );
}

export default ProductListItem;