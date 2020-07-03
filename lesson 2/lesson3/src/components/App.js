import React, { Component } from 'react'
import AuthForm from './authForm/AuthForm'
import ProductForm from './productForm/ProductForm';
import ProductsList from './productsList/ProductsList';

class App extends Component {
  state = {
    products: []
  }

  getNewProduct = (product) => {
    this.setState(prevState=> ({
      products: [...prevState.products, product ]
    }))
  }


  render() {
    return (
      <div>
        <h2>FORMS</h2>
        <AuthForm  />
        <ProductForm getNewProduct={this.getNewProduct}/>
        <ProductsList />
      </div>

    );
  }
}

export default App;