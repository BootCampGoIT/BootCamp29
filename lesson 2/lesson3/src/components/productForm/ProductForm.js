import React, { Component } from 'react';
import axios from 'axios';

// const API_KEY = "AIzaSyAdzls6jyMSj9l5fr2JPCwBdeE46JQhUBw";

class ProductForm extends Component {
    state = {
        name: "",
        price: 0
    }

    getInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    addProduct = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token;
        console.log(token)
        token && axios.post(`https://newproject-eb2de.firebaseio.com/products.json?auth=${token}`, { ...this.state })
            .then(response => this.props.getNewProduct({ id: response.data.name, ...this.state }))
        // 
    }



    render() {
        const { name, price } = this.state;
        return (
            <form onSubmit={this.addProduct}>
                <label>Name<input type="text" name="name" onChange={this.getInfo} value={name} /></label>
                <label>Price<input type="number" name="price" onChange={this.getInfo} value={price} /></label>
                {/* <ButtonsGrop getAction={this.getAction} /> */}
                <button type="submit" >Add product</button>
            </form>
        );
    }
}

export default ProductForm;