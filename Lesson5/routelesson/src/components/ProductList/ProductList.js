import React, { Component } from 'react';
import axios from 'axios';
import { shop } from '../localDB';
import ProductListItem from './ProductListItem/ProductListItem';

class ProductList extends Component {
    state = {
        currentPageData: []
    }

    getData = async () => {
        const category = this.props.category;
        const response = await axios.get(`https://chat-74d03.firebaseio.com/products/${category}.json`);
        const keys = Object.keys(response.data);
        const data = [];
        for (const key of keys) {
            data.push({ id: key, ...response.data[key] })
        }
        shop.products[category] = [...data];
        this.setState({ currentPageData: [...data] })
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.category !== this.props.category) {
            this.getData()
        }
    }

    render() {
        return (
            <ul>
                {this.state.currentPageData.map(product => <ProductListItem product={product} key={product.id} />)}
            </ul>
        );
    }
}

export default ProductList;