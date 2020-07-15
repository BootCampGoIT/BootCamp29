import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import css from './productsPage.module.css';
import axios from 'axios';
import { shop } from '../localDB';
import ProductList from '../ProductList/ProductList';

class ProductsPage extends Component {
    state = {
        from: "",

    }

    async componentDidMount() {
        const response = await axios.get(`https://chat-74d03.firebaseio.com/products/toys.json`);
        const keys = Object.keys(response.data);
        const data = [];
        for (const key of keys) {
            data.push({ id: key, ...response.data[key] })
        }
        shop.products.toys = [...data];
        this.props.history.push({ pathname: "/products/toys" })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
    }



    backToHandleChange = () => {
        this.props.history.push({
            pathname: this.props.location.state.from,
            state: { from: this.props.history.location.pathname, search: this.props.history.location.search },
        })
    }
    render() {
        return (
            <>
                <h1>ProductsPage</h1>
                <button onClick={this.backToHandleChange}>Back to</button>
                <ul className={css.navigationList}>
                    <li className={css.navigationListItem}>
                        <NavLink to="/products/toys"
                            data-link="toys"
                            activeClassName={css.activeLink}
                            className={css.navigLink}>Toys</NavLink>
                    </li>
                    <li className={css.navigationListItem}>
                        <NavLink to="/products/tools"
                            data-link="tools"
                            activeClassName={css.activeLink}
                            className={css.navigLink}>Tools</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/products/toys" render={() => <ProductList category="toys" />} />
                    <Route path="/products/tools" render={() => <ProductList category="tools" />} />
                </Switch>



            </>
        );
    }
}

export default ProductsPage;