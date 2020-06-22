import React, { Fragment } from 'react';
import styles from './listItem.module.css';
import styled from 'styled-components';

console.dir(React)
const getColor = (flag) => {
    return {
        backgroundColor: flag ? "red" : "white"
    }
}
const Header2 = styled.h2`
    color: red;
`;


// const array = new Array([1, 2, 3, 4, 5]);
// console.dir(array)

// const alex = {
//     name: "Alex",
//     age: 25
// }
// const number = 5;
// // console.log(array)

// const array = [1, 2, 3, 4, 5];
// const JS = {
//     Math: {
//         round(a){
//         },
//         max(a,b){
//             if (a> b) {
//                 return a
//             }
//         },
//         min(a,b) {
//             if (a< b) {
//                 return a
//             }
//         }
//     },

//     functions: {

//     },
//     arrays: {
//         array: {
//             0: 1,
//             1: 2,

//         }
//     },
//     objects: {
//         alex: {
//             name: "Alex",
//             age: 25
//         }
//     },
//     numbers: {
//         number: 5

//     }

// }


const getStyledComponent = (product) => {
    return product.isbad ? "green" : "black"
}


const ListItem = ({ product, getMesage }) => {
    const Paragraph = styled.p`
    text-indent: 10px;
    color: ${getStyledComponent(product)};`

    return (
        // <li style={getColor(product.isbad)}>
        //     <h2>{product.name}</h2>
        //     <p>{product.price}</p>
        //     <button>Delete</button>
        // </li>
        // ==========================
        // <Fragment>
        //     <li className={[styles.listItem, styles.listItem2].join(' ')}>
        //         <Header2>{product.name}</Header2>
        //         <Paragraph>{product.price}</Paragraph>
        //         <button>Delete</button>
        //     </li>
        // </Fragment>
        // ============================

        <li className={product.isbad ? styles.listItem : styles.listItemBad}>
            <Header2>{product.name}</Header2>
            <Paragraph>{product.price}</Paragraph>
            <button onClick={() => getMesage("My name is Andrii")}>Delete</button>
        </li>
    )
}
export default ListItem;