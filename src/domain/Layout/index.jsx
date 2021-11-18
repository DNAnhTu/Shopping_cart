import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss'

export const Layout = ({ children }) => (
    <div id="main-layout">

        <header>
            <h2>Shopping Cart</h2>
            <ul>
                <li>
                    <Link to="/products">Sản phẩm</Link>
                </li>
                <li>
                    <Link to="/cart">giỏ hàng</Link>
                </li>
            </ul>
        </header>

        <main>
            {children}
        </main>

        <footer>
        </footer>

    </div>
)

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
}

export default Layout
