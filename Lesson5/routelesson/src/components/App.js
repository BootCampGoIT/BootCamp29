import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './Navigation/Navigation';

const App = () => {
    return (
        <>

            <Navigation />

            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route component={NotFoundPage} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </>

    );
}

export default App;