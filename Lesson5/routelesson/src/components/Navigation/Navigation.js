import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = (props) => {
    return (
        <ul className={css.navigationList}>
            <li className={css.navigationListItem}>
                <NavLink
                    to={{
                        pathname: '/',
                        state:
                            { from: props.location.pathname, search: props.history.location.search },
                    }}
                    exact
                    activeClassName={css.activeLink}
                    className={css.navigLink}>Home</NavLink>
            </li>
            <li className={css.navigationListItem}>
                <NavLink
                    to={{
                        pathname: '/products',
                        // search: '?category=popular',
                        state:
                            { from: props.location.pathname, search: props.history.location.search },
                    }}
                    activeClassName={css.activeLink}
                    className={css.navigLink}>Products</NavLink>
            </li>
            <li className={css.navigationListItem}>
                <NavLink

                    to={{
                        pathname: '/profile',
                        state:
                            { from: props.location.pathname, search: props.history.location.search},
                    }}
                    activeClassName={css.activeLink}
                    className={css.navigLink}>Profile</NavLink>
            </li>
        </ul>
    );
}

export default withRouter(Navigation);