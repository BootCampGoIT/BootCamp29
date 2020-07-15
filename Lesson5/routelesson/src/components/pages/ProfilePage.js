import React, { Component } from 'react';
import axios from 'axios';
import { shop } from '../localDB';

class ProfilePage extends Component {
    state = {
        productName: "",
        productPrice: 0,
        category: "toys"
    }

    addProduct = async (e) => {
        e.preventDefault();
        const { category } = this.state;
        const response = await axios.post(`https://chat-74d03.firebaseio.com/products/${category}.json`, { ...this.state })
        shop.products[category] = [...shop.products[category], { id: response.data.name, ...this.state }];
    }

    productHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }

    render() {
        console.log("profileProps", this.props)
        return (
            <>
                <form name="productForm" onSubmit={this.addProduct}>
                    <input type="text" name="productName" onChange={this.productHandleChange} />
                    <input type="text" name="productPrice" onChange={this.productHandleChange} />
                    <select name="category" onChange={this.productHandleChange}>
                        <option value="toys" >Toys</option>
                        <option value="tools">Tools</option>
                    </select>
                    <button type="submit">Add product</button>
                </form>
            </>
        );
    }
}

export default ProfilePage;