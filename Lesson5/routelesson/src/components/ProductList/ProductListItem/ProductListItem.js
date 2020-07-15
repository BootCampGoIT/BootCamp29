import React from 'react'

const ProductListItem = ({ product }) => {
    return (
        <li>
            <h2>{product.productName}</h2>
            <p>{product.productPrice}</p>
        </li>
    );
}

export default ProductListItem;