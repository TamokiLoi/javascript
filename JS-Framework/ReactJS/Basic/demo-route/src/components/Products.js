import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        var products = [
            { id: 1, slug: 'iphone-X', name: 'Iphone X', price: 35000000 },
            { id: 2, slug: 'iphone-XX', name: 'Iphone XX', price: 45000000 },
            { id: 3, slug: 'iphone-XXX', name: 'Iphone XXX', price: 55000000 },
        ];

        var { match } = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            );
        });

        var { location } = this.props;
        console.log(location);

        return (
            <div className="container">
                <h1>List Products</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/product/:name" component={Product} />
                </div>
            </div>
        );
    }
}

export default Products;
