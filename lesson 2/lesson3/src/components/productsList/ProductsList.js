import React, { Component } from 'react';
import axios from 'axios';
import ProductListItem from './productListItem/ProductListItem';

class ProductsList extends Component {
    state = {
        products: []
    }
    // componentWillMount() {
    //     this.setState({ products: [] })
    //     console.log('componentWillMount');
    // }


    componentDidMount() {
        console.log('componentDidMount');
        this.getData()
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        if (this.state.products.length === nextState.products.length) {
            return false
        } else return true
        // console.log(nextState)
        // return false //false
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log('prevState', prevState)
    }
    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
    }

    getData = () => {
        axios.get('https://newproject-eb2de.firebaseio.com/products.json')
            .then(response => {
                const products = [];
                for (const key in response.data) {
                    products.push({ id: key, ...response.data[key] })
                }
                this.setState({ products })
            })
    }

    deleteProduct = (e) => {
        const id = e.target.closest('[data-id]').dataset.id;
        console.log(id);
        this.setState(prevState => ({
            products: prevState.products.filter(product => product.id !== id)
        }))

    }



    render() {
        console.log("render");
        const { products = [] } = this.state;
        return (
            <>
                <button type="button" onClick={this.getData}>Обновить!</button>
                <ul>
                    {products.map(product => <ProductListItem deleteProduct={this.deleteProduct} product={product} key={product.id} />)}
                </ul>
            </>
        );
    }
}

export default ProductsList;